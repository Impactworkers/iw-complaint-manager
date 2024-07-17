import type { StorybookConfig } from "@storybook/nextjs";
import { DefinePlugin } from 'webpack';
import path from 'path';



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
    staticDirs: ["../public"],
    webpackFinal: async (config) => {
        config.plugins = config.plugins || [];
        config.plugins.push(
          new DefinePlugin({
            'process.env.STORYBOOK': JSON.stringify(true),
          })
        );
        config.resolve = config.resolve || {};
        config.resolve.alias = {
          ...config.resolve.alias,
          'next/navigation': path.resolve(__dirname, '../src/components/AppBar/storybookRouter.tsx'),
        };
    
        return config;
      },
};

export default config;
