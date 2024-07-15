import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import AppBarWithSideNav from "./AppBar";
import { useOktaAuth } from "@okta/okta-react";
import { mockMenuItems } from "./mocks";
import { AppRouterContextProviderMock } from "./mockRouter";

jest.mock("@okta/okta-react");

const mockUseOktaAuth = useOktaAuth as jest.MockedFunction<typeof useOktaAuth>;

type PartialOktaAuthReturnType = {
    authState?: Partial<ReturnType<typeof useOktaAuth>["authState"]>;
    oktaAuth?: Partial<ReturnType<typeof useOktaAuth>["oktaAuth"]>;
};

describe("AppBarWithSideNav Component", () => {
    beforeEach(() => {
        const mockAuth: PartialOktaAuthReturnType = {
            authState: { isAuthenticated: true },
            oktaAuth: {
                getUser: jest.fn().mockResolvedValue({ name: "John Doe" })
            }
        };
        mockUseOktaAuth.mockReturnValue(
            mockAuth as ReturnType<typeof useOktaAuth>
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("renders AppBarWithSideNav with authenticated user", async () => {
        const push = jest.fn();

        act(() =>
            render(
                <AppRouterContextProviderMock router={{ push }}>
                    <AppBarWithSideNav drawerItems={mockMenuItems} />
                </AppRouterContextProviderMock>
            )
        );

        await screen.findByText("JD");

        expect(screen.getByLabelText("open drawer")).toBeInTheDocument();
        expect(screen.getByAltText("Logo")).toBeInTheDocument();
        expect(
            screen.getByLabelText("account of current user")
        ).toBeInTheDocument();
    });

    test("toggles drawer visibility", async () => {
        const push = jest.fn();

        await act(async () =>
            render(
                <AppRouterContextProviderMock router={{ push }}>
                    <AppBarWithSideNav drawerItems={mockMenuItems} />
                </AppRouterContextProviderMock>
            )
        );

        const drawerToggleButton = screen.getByLabelText("open drawer");

        await act(async () => fireEvent.click(drawerToggleButton));
        expect(screen.getByRole("complementary")).toHaveClass("MuiDrawer-root");

        await act(async () =>
            fireEvent.click(screen.getByRole("complementary"))
        );
        expect(screen.queryByRole("complementary")).toHaveClass(
            "MuiDrawer-docked"
        );
    });

    test("renders default user avatar when user is not authenticated", async () => {
        mockUseOktaAuth.mockReturnValue({
            authState: { isAuthenticated: false }
        } as ReturnType<typeof useOktaAuth>);
        const push = jest.fn();

        await act(async () =>
            render(
                <AppRouterContextProviderMock router={{ push }}>
                    <AppBarWithSideNav drawerItems={mockMenuItems} />
                </AppRouterContextProviderMock>
            )
        );

        expect(screen.getByTestId("default-avatar-menu")).toBeInTheDocument();
    });
});
