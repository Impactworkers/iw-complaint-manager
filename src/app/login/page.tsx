"use client";

import { useEffect, FC } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useRouter } from "next/navigation";

const Login: FC = () => {
    const { oktaAuth, authState } = useOktaAuth();
    const router = useRouter();

    useEffect(() => {
        if (!authState) {
            return;
        }

        if (!authState.isAuthenticated) {
            oktaAuth.signInWithRedirect();
        } else {
            router.push("/");
        }
    }, [authState, oktaAuth, router]);

    return <div>Loading...</div>;
};

export default Login;
