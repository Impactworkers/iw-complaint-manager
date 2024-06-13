import React, { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import useOktaWidget from "../hooks/useOktaWidget";

const Login = () => {
    const { oktaAuth, authState } = useOktaAuth();
    const widgetRef = useOktaWidget(oktaAuth);

    useEffect(() => {
        console.log(process.env.NEXT_PUBLIC_OKTA_CLIENT_ID);
        if (!authState) return;

        if (!authState.isAuthenticated) {
            oktaAuth.signInWithRedirect();
        }
    }, [authState, oktaAuth]);

    return (
        <div>
            {authState && !authState.isAuthenticated && (
                <div ref={widgetRef}></div>
            )}
        </div>
    );
};

export default Login;
