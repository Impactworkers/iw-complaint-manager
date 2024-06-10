import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";

const Home: React.FC = () => {
    return (
        <ProtectedRoute>
            <div>Welcome to the protected home page!</div>
        </ProtectedRoute>
    );
};

export default Home;
