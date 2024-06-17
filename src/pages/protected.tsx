import React from "react";
import { useOktaAuth } from "@okta/okta-react";

const Protected: React.FC = () => {
    const { authState, oktaAuth } = useOktaAuth();

    if (!authState) {
        return <div>Loading...</div>;
    }

    if (!authState.isAuthenticated) {
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

export default Protected;

