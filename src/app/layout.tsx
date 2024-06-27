import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "../../.storybook/theme";
import CssBaseline from "@mui/material/CssBaseline";
import NavigationBar from "../components/NavigationBar/NavigationBar";
export default function RootLayout(props: any) {
    const { children } = props;
    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={lightTheme}>
                        <CssBaseline />
                        {children}
                        <NavigationBar />
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
