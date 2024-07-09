import { Meta, StoryObj } from "@storybook/react";
import { NavigationBar } from "./NavigationBar";
import { within, expect } from "@storybook/test";

const meta: Meta<typeof NavigationBar> = {
    title: "Component/NavigationBar",
    component: NavigationBar,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen", // Adjusts the layout. Options: 'fullscreen', 'padded', 'centered'
        viewport: {
            // Adjusts the viewport size
            defaultViewport: "responsive" // Options include: 'responsive', 'iphone6', 'iphone6p', 'ipad', etc.
        },
        docs: {
            description: {
                component:
                    "NavigationBar component renders a sliding drawer navigation menu."
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NavBarOpen: Story = {
    args: {
        text: ["Cases", "Admin Portal"],
        muiIcons: ["Cases", "Edit"],
        isDrawerOpen: true
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const navBarButton = await canvas.findByRole("button", {
            name: /Cases/i
        });
        await expect(navBarButton).toBeInTheDocument();
    }
};
