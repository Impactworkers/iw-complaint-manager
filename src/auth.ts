// src/pages/auth.ts
import { OktaAuth } from "@okta/okta-auth-js";

const oktaAuth = new OktaAuth({
    issuer: process.env.NEXT_PUBLIC_OKTA_ISSUER!,
    clientId: process.env.NEXT_PUBLIC_OKTA_CLIENT_ID!,
    redirectUri: process.env.NEXT_PUBLIC_OKTA_REDIRECT_URI!,
    scopes: ["openid", "profile", "email"],
    pkce: true,
    responseType: "code"
});

export default oktaAuth;
