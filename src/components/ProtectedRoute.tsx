import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import { NextPage } from "next";
import Login from "../pages/login/login";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: NextPage<ProtectedRouteProps> = ({ children }) => {
    const { authState } = useOktaAuth();

    if (authState && authState.isAuthenticated) {
        return <Login />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
