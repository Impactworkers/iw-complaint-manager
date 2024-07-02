"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "../../.storybook/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
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
        <html lang="en">
            <body>
                <Security
                    oktaAuth={oktaAuth}
                    restoreOriginalUri={restoreOriginalUri}
                >
                    <AppRouterCacheProvider>
                        <ThemeProvider theme={lightTheme}>
                            <CssBaseline />
                            {children}
                            <NavigationBar
                                text={["Cases", "Admin Portal"]}
                                muiIcons={["Cases", "Edit"]}
                            />
                        </ThemeProvider>
                    </AppRouterCacheProvider>
                </Security>
            </body>
        </html>
    );
}
