// src/pages/auth.ts
import { OktaAuth } from "@okta/okta-auth-js";

const oktaAuth = new OktaAuth({
    issuer: "fakeissuer",
    clientId: "fakeid",
    redirectUri: "https://localhost:3000/login/callback",
    scopes: ["openid", "profile", "email"],
    pkce: true,
    responseType: "code"
});

export default oktaAuth;
