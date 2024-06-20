import type { Preview } from "@storybook/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { defaultTheme } from "./theme.ts";

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
            light: defaultTheme,
        },
        defaultTheme: "light",
        Provider: ThemeProvider,
        GlobalStyles: CssBaseline
    })
];
export default preview;
