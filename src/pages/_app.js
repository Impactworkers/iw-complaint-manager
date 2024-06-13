import { useRouter } from "next/router";
import { Security } from "@okta/okta-react";
import { oktaAuthConfig } from "../../okta_config/oktaConfig";

function App({ Component, pageProps }) {
    const router = useRouter();

    const onAuthRequired = () => {
        router.push("/login");
    };

    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
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
}

export default App;
