"use client";

import React, { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

const HomePage = () => {
<<<<<<< HEAD
    const isHerokuEnv = process.env.NODE_ENV === "production"; // Check if in Heroku environment
=======
    const isHerokuEnv = process.env.APP_ENV === "development"; // Check if in Heroku environment
>>>>>>> a0fc6a7 (Change environment variable for heroku build time)

    const { oktaAuth, authState } = useOktaAuth();
    useEffect(() => {
        if (isHerokuEnv) {
            const handleRedirect = async () => {
                if (!((await oktaAuth.isAuthenticated()) && authState)) {
                    await oktaAuth.signInWithRedirect();
                }
            };

            handleRedirect();
        }
    }, [isHerokuEnv, oktaAuth, authState]);

    return (
        <div>
            <h1>Home Page</h1>
            {isHerokuEnv ? (
                <p>Welcome to the app!</p>
            ) : (
                <p>Local Environment: No SSO</p>
            )}
        </div>
    );
};

export default HomePage;
