import { Meta, StoryObj } from "@storybook/react";
import { NavigationBar } from "./NavigationBar";
import { within, userEvent, expect } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Component/NavigationBar",
    component: NavigationBar,
    tags: ["autodocs"],
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavBarClosed: Story = {
    args: {
        text: ["Cases", "Admin Portal"],
        muiIcons: ["Cases", "Edit"]
    }
};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const NavBarOpen: Story = {
    args: {
        text: ["Cases", "Admin Portal"],
        muiIcons: ["Cases", "Edit"]
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const navBarButton = canvas.getByRole("button", {
            name: /Navigation Bar/i
        });
        await expect(navBarButton).toBeInTheDocument();
        await userEvent.click(navBarButton);
    }
};
