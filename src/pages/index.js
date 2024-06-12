import React from "react";
import { useOktaAuth } from "@okta/okta-react";

const Home = () => {
    const oktaAuthContext = useOktaAuth();
    if (!oktaAuthContext) {
        return <div>Loading...</div>; // or some appropriate fallback UI
    }

    const { authState, oktaAuth } = oktaAuthContext;

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
