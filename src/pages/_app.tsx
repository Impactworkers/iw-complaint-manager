import { AppProps } from "next/app";
import React from "react";
import { useRouter } from "next/navigation";
import { Security } from "@okta/okta-react";
import {
    oktaAuthConfig,
    useOnAuthRequired
} from "../../okta_config/oktaConfig";
import { OktaAuth } from "@okta/okta-auth-js";

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();

    const onAuthRequired = useOnAuthRequired();

    const restoreOriginalUri = async (
        oktaAuth: OktaAuth,
        originalUri: string
    ): Promise<void> => {
        router.push(originalUri);
    };

    return (
        <Security
            oktaAuth={oktaAuthConfig.oktaAuth}
            onAuthRequired={onAuthRequired}
            restoreOriginalUri={restoreOriginalUri}
        >
            <Component {...pageProps} />
        </Security>
    );
};

export default App;
