import { Meta, StoryObj } from "@storybook/react";
import { NavigationBar } from "./NavigationBar";

const meta = {
    title: "Example/NavigationBar",
    component: NavigationBar,
    tags: ["autodocs"],
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof NavigationBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: ["Cases", "Admin Portal"]
    }
};
