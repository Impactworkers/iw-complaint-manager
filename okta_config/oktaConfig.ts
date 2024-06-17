import { OktaAuth } from "@okta/okta-auth-js";
import { useRouter } from "next/router";

const oktaAuth = new OktaAuth({
    issuer: `${process.env.NEXT_PUBLIC_OKTA_DOMAIN}/oauth2/default`,
    clientId: process.env.NEXT_PUBLIC_OKTA_CLIENT_ID,
    redirectUri: `${process.env.NEXT_PUBLIC_OKTA_REDIRECT_URI}/login/callback`,
    scopes: ["openid", "profile", "email"],
    pkce: true
});

export const useOnAuthRequired = () => {
    const router = useRouter();

    return () => {
        router.push("/login");
    };
};

export const oktaAuthConfig = {
    oktaAuth,
    onAuthRequired: useOnAuthRequired
};

