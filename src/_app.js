import React from "react";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import "../styles/globals.css";
import { Security } from "@okta/okta-react";
import { OktaAuth } from "@okta/okta-auth-js";
import { useRouter } from "next/router";

import Home from "./pages/index";
import Login from "./pages/login";
import LoginCallback from "./pages/login/callback";

const oktaAuth = new OktaAuth({
    issuer: `${process.env.NEXT_PUBLIC_OKTA_DOMAIN}/oauth2/default`,
    clientId: process.env.NEXT_PUBLIC_OKTA_CLIENT_ID,
    redirectUri: `${process.env.NEXT_PUBLIC_OKTA_REDIRECT_URI}/login/callback`,
    scopes: ["openid", "profile", "email"],
    pkce: true
});

function App() {
    const router = useRouter();

    const onAuthRequired = () => {
        router.push("/login");
    };

    return (
        <Security>
            oktaAuth={oktaAuth}
            onAuthRequired={onAuthRequired}
            <router path="/" exact component={Home} />
            <router path="/login" component={Login} />
            <router path="/login/callback" component={LoginCallback} />
        </Security>
    );
}

export default App;
