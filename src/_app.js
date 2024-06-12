import React from "react";
import { Security } from "@okta/okta-react";
import { OktaAuth } from "@okta/okta-auth-js";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import ProtectedPage from "./protected";
import Home from "./pages";
// import LoginCallback from "./pages/login/callback";
import Login from "./pages/login";

const oktaAuth = new OktaAuth({
    issuer: `${process.env.NEXT_PUBLIC_OKTA_DOMAIN}/oauth2/default`,
    clientId: process.env.NEXT_PUBLIC_OKTA_CLIENT_ID,
    redirectUri: `${process.env.NEXT_PUBLIC_OKTA_REDIRECT_URI}/login/callback`,
    scopes: ["openid", "profile", "email"],
    pkce: true
});

const App = () => {
    return (
        <Router>
            <Security oktaAuth={oktaAuth}>
                <Route path="/" component={Home} />
                <Route path="/login" component={Login} />
                {/* <Route path="/login/callback" component={LoginCallback} /> */}
                {/* <Route path="/protected" component={ProtectedPage} /> */}
            </Security>
        </Router>
    );
};

export default App;
