"use client";
import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Login: React.FC = () => {
    console.log("Login page");
    console.log("issuer: ", process.env.NEXT_PUBLIC_OKTA_ISSUER);
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
