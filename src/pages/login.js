import React from "react";
import { useOktaAuth } from "@okta/okta-react";

const Login = () => {
    const { oktaAuth } = useOktaAuth();

    const login = async () => {
        oktaAuth.signInWithRedirect();
    };

    return (
        <div>
            <button onClick={login}>Log in</button>
        </div>
    );
};

export default Login;
