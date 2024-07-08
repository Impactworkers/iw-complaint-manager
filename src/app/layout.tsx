"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "../../.storybook/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Security } from "@okta/okta-react";
import oktaAuth from "../auth/auth";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import OktaAuth from "@okta/okta-auth-js";

export default function RootLayout({ children }: { children: ReactNode }) {
    const router = useRouter();

    const restoreOriginalUri = async (
        oktaAuth: OktaAuth,
        originalUri: string
    ) => {
        router.push(originalUri || "/");
    };

    return (
        <html lang="en" style={{ height: "100%", margin: "0", padding: "0" }}>
            <body style={{ display: "flex", flexDirection: "column" }}>
                <Security
                    oktaAuth={oktaAuth}
                    restoreOriginalUri={restoreOriginalUri}
                >
                    <AppRouterCacheProvider>
                        <ThemeProvider theme={lightTheme}>
                            <CssBaseline />
                            {children}
                        </ThemeProvider>
                    </AppRouterCacheProvider>
                </Security>
            </body>
        </html>
    );
}
