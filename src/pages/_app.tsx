import { AppProps } from "next/app";
import { Security } from "@okta/okta-react";
import oktaConfig from "../config/oktaConfig";
import OktaAuth from "@okta/okta-auth-js";

const oktaAuth = new OktaAuth(oktaConfig);

const restoreOriginalUri = async (_oktaAuth: OktaAuth, originalUri: string) => {
    window.location.replace(originalUri);
};

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Security
            oktaAuth={oktaAuth}
            restoreOriginalUri={restoreOriginalUri}
            {...oktaConfig}
        >
            <Component {...pageProps} />
        </Security>
    );
};

export default MyApp;
