import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import useOktaWidget from "../hooks/useOktaWidget";

const Login = () => {
    const { oktaAuth } = useOktaAuth();
    const widgetRef = useOktaWidget(oktaAuth);

    return (
        <div>
            <div ref={widgetRef} />
        </div>
    );
};

export default Login;
