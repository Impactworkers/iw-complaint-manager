"use client";

import { OktaAuth } from "@okta/okta-auth-js";
import { Security } from "@okta/okta-react";
import { useRouter } from "next/router";
import oktaAuth from "../auth";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();

    const restoreOriginalUri = async (
        oktaAuth: OktaAuth,
        originalUri: string
    ): Promise<void> => {
        router.push(originalUri || "/");
    };

    return (
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
            <Component {...pageProps} />
        </Security>
    );
};

export default App;
