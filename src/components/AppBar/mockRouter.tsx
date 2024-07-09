import { createContext } from "react";
import { Decorator } from "@storybook/react";

export const mockRouter = {
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
    push: async (url: string) => {
        console.log(`Navigating to: ${url}`);
    },
    prefetch: async (url: string) => {
        console.log(`Prefetching: ${url}`);
    }
};

export const RouterContext = createContext(mockRouter);

export const withRouter: Decorator = (Story) => (
    <RouterContext.Provider value={mockRouter}>
        <Story />
    </RouterContext.Provider>
);
