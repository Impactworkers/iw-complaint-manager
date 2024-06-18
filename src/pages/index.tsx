"use client";

import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useEffect } from "react";
// import { useRouter } from "next/router";

const Home: React.FC = () => {
    const { authState, oktaAuth } = useOktaAuth();
    // const router = useRouter();

    useEffect(() => {
        if (!authState || !authState.isAuthenticated) {
            oktaAuth.signInWithRedirect();
        }
    }, [authState, oktaAuth]);

    if (!authState || !authState.isAuthenticated) {
        return <div>Loading...</div>;
    }

    return <div>Welcome to the app!</div>;
};

export default Home;
