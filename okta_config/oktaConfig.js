import { OktaAuth } from "@okta/okta-auth-js";

const oktaAuth = new OktaAuth({
    issuer: `${process.env.NEXT_PUBLIC_OKTA_DOMAIN}/oauth2/default`,
    clientId: process.env.NEXT_PUBLIC_OKTA_CLIENT_ID,
    redirectUri: `${process.env.NEXT_PUBLIC_OKTA_REDIRECT_URI}/login/callback`,
    scopes: ["openid", "profile", "email"],
    pkce: true
});

export const oktaAuthConfig = {
    oktaAuth,
    onAuthRequired: ({ history }) => {
        history.push("/login");
    }
};
