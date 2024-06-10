// pages/callback.tsx
import React, { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useRouter } from "next/router";

const Callback: React.FC = () => {
    const router = useRouter();
    const { authState } = useOktaAuth();

    useEffect(() => {
        if (authState && authState.isAuthenticated) {
            router.push("/");
        }
    }, [authState, router]);

    return <div>Loading...</div>;
};

export default Callback;
