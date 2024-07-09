import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@mui/material";
import AppBarWithSideNav from "./AppBar";
import { mockMenuItems } from "./mocks";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { withRouter } from "./mockRouter";

const theme = createTheme();

const meta: Meta<typeof AppBarWithSideNav> = {
    title: "Navigation/AppBarWithSideNav",
    component: AppBarWithSideNav,
    decorators: [withRouter], // Adding the withRouter decorator
    parameters: {
        docs: {
            description: {
                component:
                    "The AppBarWithSideNav component includes an app bar with a hamburger menu that opens a drawer from the left side of the screen. The drawer contains a list of navigation items with icons that navigate to different routes. The component is reusable and generic, supporting dynamic menu items without submenus."
            }
        },
        layout: "fullscreen"
    }
};

export default meta;

type Story = StoryObj<typeof AppBarWithSideNav>;

const AppBarWithSideNavWrapper: React.FC<any> = (args) => {
    const [open, setOpen] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <div style={{ transform: "scale(1)", height: "100vh" }}>
                <AppBarWithSideNav {...args} open={open} setOpen={setOpen}>
                    <Stack
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            margin: "20px"
                        }}
                    >
                        <div>Children Content</div>
                    </Stack>
                </AppBarWithSideNav>
            </div>
        </ThemeProvider>
    );
};

export const Default: Story = {
    render: (args) => <AppBarWithSideNavWrapper {...args} />,
    args: {
        headerIcon: <img width="150" src="/path/to/logo.png" alt="Logo" />,
        drawerItems: mockMenuItems
    }
};
