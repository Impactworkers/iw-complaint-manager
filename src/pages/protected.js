import React from "react";
import { useOktaAuth } from "@okta/okta-react";

const ProtectedPage = () => {
    const { authState } = useOktaAuth();

    if (authState.isPending) {
        return <div>Loading authentication...</div>;
    }

    if (!authState.isAuthenticated) {
        return <div>Not authenticated</div>;
    }

    return (
        <div>
            <p>You are logged in!</p>
            {/* Add your protected content here */}
        </div>
    );
};

export default ProtectedPage;
