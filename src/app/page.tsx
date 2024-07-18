"use client";
import { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const herokuEnv = process.env.NEXT_PUBLIC_APP_ENV;
    const isHerokuEnv =
        herokuEnv === "development" ||
        herokuEnv === "qa" ||
        herokuEnv === "staging";
    const { oktaAuth, authState } = useOktaAuth();
    const [redirectAttempted, setRedirectAttempted] = useState(false);

    useEffect(() => {
        if (isHerokuEnv && !redirectAttempted) {
            const handleRedirect = async () => {
                const isAuthenticated =
                    authState?.isAuthenticated ||
                    (await oktaAuth.isAuthenticated());
                if (!isAuthenticated) {
                    setRedirectAttempted(true);
                    await oktaAuth.signInWithRedirect();
                }
            };

            handleRedirect();
        }
    }, [isHerokuEnv, oktaAuth, authState, redirectAttempted]);

    useEffect(() => {
        if (authState?.isAuthenticated) {
            router.push("/dashboard");
        }
    }, [authState, router]);

    return <></>;
}
