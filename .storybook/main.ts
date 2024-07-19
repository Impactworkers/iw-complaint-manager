import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
    stories: [
        "../src/**/*.mdx",
        "../src/components/**/*.stories.@(js|jsx|ts|tsx)",   
        // TODO: add this line when hook stories are needed
        //"../src/hooks/**/*.stories.@(js|jsx|ts|tsx)",     
    ],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions"
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {}
    },
    staticDirs: ["../public"]
};

export default config;
