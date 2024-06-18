// src/pages/auth.ts
import { OktaAuth } from "@okta/okta-auth-js";

const oktaAuth = new OktaAuth({
    issuer: "ksjdbksbflksdnlkdsf",
    clientId: "kjdbfkjebfjebfj",
    redirectUri: "https://iwcm-dev-4aa83826f5da.herokuapp.com",
    scopes: ["openid", "profile", "email"],
    pkce: true,
    responseType: "code"
});

export default oktaAuth;
