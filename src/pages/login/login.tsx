// pages/login.tsx
import React, { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

const Login: React.FC = () => {
    const { oktaAuth } = useOktaAuth();

    useEffect(() => {
        oktaAuth.signInWithRedirect({ originalUri: "/" });
    }, [oktaAuth]);

    return <div>Loading...</div>;
};

export default Login;
