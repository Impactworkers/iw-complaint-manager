import { createContext } from "react";
import { Decorator } from "@storybook/react";
import {
    AppRouterContext,
    AppRouterInstance
} from "next/dist/shared/lib/app-router-context.shared-runtime";

export type AppRouterContextProviderMockProps = {
    router: Partial<AppRouterInstance>;
    children: React.ReactNode;
};

export const AppRouterContextProviderMock = ({
    router,
    children
}: AppRouterContextProviderMockProps): React.ReactNode => {
    const mockedRouter: AppRouterInstance = {
        back: jest.fn(),
        forward: jest.fn(),
        push: jest.fn(),
        replace: jest.fn(),
        refresh: jest.fn(),
        prefetch: jest.fn(),
        ...router
    };
    return (
        <AppRouterContext.Provider value={mockedRouter}>
            {children}
        </AppRouterContext.Provider>
    );
};

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
