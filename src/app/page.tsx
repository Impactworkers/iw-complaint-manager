"use client";
import { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import Link from "next/link";
import { Typography } from "@mui/material";

export default function Page() {
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

    return (
        <>
            {isHerokuEnv && authState?.isAuthenticated ? (
                <>
                    <Typography variant="h5" className="page-title">
                        Welcome to Complaint Manager 2.0
                    </Typography>
                    <Link href="/dashboard">Go to dashboard</Link>
                </>
            ) : (
                <p>Not logged in</p>
            )}
        </>
    );
}
