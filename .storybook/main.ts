export default {
    stories: [
        "../src/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    core: {
        builder: "@storybook/builder-vite" // 👈 The builder enabled here.
    },
    framework: {
        name: "@storybook/react-vite",
        options: {
            builder: {
                viteConfigPath: "sb-vite.config.ts"
            }
        }
    },
    typescript: {
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            // Speeds up Storybook build time
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false
            },
            // Makes union prop types like variant and size appear as select controls
            shouldExtractLiteralValuesFromEnum: true,
            // Makes string and boolean types that can be undefined appear as inputs and switches
            shouldRemoveUndefinedFromOptional: true,
            // Filter out third-party props from node_modules except @mui packages
            propFilter: (prop) =>
                prop.parent
                    ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
                    : true
        }
    }
};
