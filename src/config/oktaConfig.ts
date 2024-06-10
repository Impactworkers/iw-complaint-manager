const oktaConfig = {
    clientId: `${process.env.OKTA_CLIENT_ID}`,
    issuer: `${process.env.OKTA_ISSUER} + /oauth2/default`,
    redirectUri: `${process.env.OKTA_REDIRECT_URI}`,
    scopes: ["openid", "profile", "email"]
};

export default oktaConfig;
