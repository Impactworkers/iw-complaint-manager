import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const OktaSignIn = dynamic(() => import("@okta/okta-signin-widget"), {
    ssr: false
});

const useOktaWidget = (oktaAuth) => {
    const widgetRef = useRef(null);

    useEffect(() => {
        if (!widgetRef.current) return;

        const widget = new OktaSignIn({
            baseUrl: process.env.NEXT_PUBLIC_OKTA_DOMAIN,
            clientId: process.env.NEXT_PUBLIC_OKTA_CLIENT_ID,
            redirectUri: process.env.NEXT_PUBLIC_OKTA_REDIRECT_URI,
            authParams: {
                pkce: true,
                issuer: `${process.env.NEXT_PUBLIC_OKTA_DOMAIN}/oauth2/default`,
                scopes: ["openid", "profile", "email"]
            }
        });

        widget.renderEl(
            { el: widgetRef.current },
            (res) => {
                if (res.status === "SUCCESS") {
                    oktaAuth.handleLoginRedirect(res.tokens);
                }
            },
            (err) => {
                console.error(err);
            }
        );

        return () => widget.remove();
    }, [oktaAuth]);

    return widgetRef;
};

export default useOktaWidget;
