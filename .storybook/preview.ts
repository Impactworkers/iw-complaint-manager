import type { Preview } from "@storybook/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { darkTheme, lightTheme } from "./theme.ts";

const preview: Preview = {
    parameters: {
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    tags: ["autodocs"]
};
export const decorators = [
    withThemeFromJSXProvider({
        themes: {
            light: lightTheme,
            dark: darkTheme
        },
        defaultTheme: "light",
        Provider: ThemeProvider,
        GlobalStyles: CssBaseline
    })
];
export default preview;
