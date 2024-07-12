import { useEffect, useState } from "react";
import { useOktaAuth } from "@okta/okta-react";

export interface UseGetOktaUserNameReturnType {
    userName: string;
    error: string | null;
    isLoading: boolean;
}

export const useGetOktaUserName = (): UseGetOktaUserNameReturnType => {
    const [userName, setUserName] =
        useState<UseGetOktaUserNameReturnType["userName"]>("");
    const { authState, oktaAuth } = useOktaAuth();
    const [error, setError] = useState<
        UseGetOktaUserNameReturnType["error"] | null
    >(null);
    const [isLoading, setIsLoading] =
        useState<UseGetOktaUserNameReturnType["isLoading"]>(true);

    useEffect(() => {
        const getUserName = async (): Promise<void> => {
            setIsLoading(true);
            try {
                const user = await oktaAuth.getUser();
                setUserName(user.name as string);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (authState?.isAuthenticated) {
            getUserName();
        }
    }, [authState?.isAuthenticated, oktaAuth]);

    return { userName, error, isLoading };
};
