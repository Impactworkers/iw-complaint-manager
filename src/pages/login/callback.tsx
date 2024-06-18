import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useOktaAuth } from "@okta/okta-react";

const LoginCallback: React.FC = () => {
    const router = useRouter();
    const { oktaAuth } = useOktaAuth();

    useEffect(() => {
        const handleCallback = async () => {
            await oktaAuth.handleLoginRedirect();
            router.push("/");
        };
        handleCallback();
    }, [oktaAuth, router]);

    return <div>Loading...</div>;
};

export default LoginCallback;
