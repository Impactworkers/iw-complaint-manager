"use client";

import { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

export default function Page() {
    const isHerokuEnv = process.env.APP_ENV === "development";
    const { oktaAuth, authState } = useOktaAuth();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        if (isHerokuEnv) {
            const handleRedirect = async () => {
                if (!((await oktaAuth.isAuthenticated()) && authState)) {
                    await oktaAuth.signInWithRedirect();
                }
            };

            handleRedirect();
        }
    }, [isHerokuEnv, oktaAuth, authState]);

    return isHerokuEnv && isClient ? (
        <main className="flex min-h-screen flex-col p-6">
            <h1 className="text-4xl font-bold">Hello, world!</h1>
            <p className="text-lg mt-4">Welcome to Complaint Manager 2.0</p>
        </main>
    ) : (
        <p>Local Environment: No SSO</p>
    );
}
