import React, { useEffect, useState } from "react";
import { useOktaAuth } from "@okta/okta-react";

const Home = () => {
    const oktaAuthContext = useOktaAuth();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient || !oktaAuthContext) {
        return <div>Loading...</div>;
    }

    const { authState, oktaAuth } = oktaAuthContext;

    if (!authState) {
        return <div>Loading...</div>;
    }

    if (authState.isPending) {
        return <div>Loading...</div>;
    }

    if (!authState.isAuthenticated) {
        return (
            <div>
                <p>You are not logged in! Please log in to continue.</p>
                <button onClick={() => oktaAuth.signInWithRedirect()}>
                    Log in
                </button>
            </div>
        );
    }

    return (
        <div>
            <h1>Welcome to our app!</h1>
            <p>You are now logged in.</p>
        </div>
    );
};

export default Home;
