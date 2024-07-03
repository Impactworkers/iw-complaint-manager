"use client";

import { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

export default function Page() {
    const isHerokuEnv = process.env.NEXT_PUBLIC_APP_ENV === "development";
    const { oktaAuth, authState } = useOktaAuth();
    const [isClient, setIsClient] = useState(false);
    const [redirectAttempted, setRedirectAttempted] = useState(false);

    useEffect(() => {
        setIsClient(true);
        if (isHerokuEnv && !redirectAttempted) {
            const handleRedirect = async () => {
                // Consider using authState.isAuthenticated if it's reliable
                const isAuthenticated =
                    authState?.isAuthenticated ||
                    (await oktaAuth.isAuthenticated());
                if (!isAuthenticated) {
                    setRedirectAttempted(true); // Prevent further attempts
                    await oktaAuth.signInWithRedirect();
                }
            };

            handleRedirect();
        }
    }, [isHerokuEnv, oktaAuth, authState, redirectAttempted]);

    return isHerokuEnv && isClient && authState?.isAuthenticated ? (
        <main
            className="flex min-h-screen flex-col p-6"
            style={{ marginLeft: "250px", paddingLeft: "5px" }}
        >
            <h1 className="text-4xl font-bold">Hello, world!</h1>
            <p className="text-lg mt-4">Welcome to Complaint Manager 2.0</p>
        </main>
    ) : (
        <p>Local Environment: No SSO</p>
    );
}
