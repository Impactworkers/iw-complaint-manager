import React from "react";
import { useOktaAuth } from "@okta/okta-react";

const Login = () => {
    const oktaAuthContext = useOktaAuth();

    const login = async () => {
        oktaAuthContext.signInWithRedirect();
    };

    return (
        <div>
            <button onClick={login}>Log in</button>
        </div>
    );
};

export default Login;
