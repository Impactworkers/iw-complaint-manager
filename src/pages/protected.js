// pages/protected.js
import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import { withAuthRequired } from "@okta/okta-react";

const Protected = () => {
    const { authState, oktaAuth } = useOktaAuth();

    if (!authState || !authState.isAuthenticated) {
        return <div>Loading...</div>;
    }

    const logout = async () => {
        await oktaAuth.signOut();
    };

    return (
        <div>
            <h1>Protected Page</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default withAuthRequired(Protected);
