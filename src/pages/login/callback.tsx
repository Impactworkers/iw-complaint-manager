"use client";

import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Callback: React.FC = () => {
    const { oktaAuth } = useOktaAuth();
    const router = useRouter();

    useEffect(() => {
        const handleCallback = async () => {
            try {
                await oktaAuth.handleLoginRedirect();
                router.push("/");
            } catch (error) {
                console.error("Error handling login callback: ", error);
            }
        };
        handleCallback();
    }, [oktaAuth, router]);

    return <div>Loading...</div>;
};

export default Callback;
