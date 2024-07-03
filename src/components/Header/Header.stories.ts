import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta = {
    title: "Component/Header",
    component: Header,
    tags: ["autodocs"],
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppBar: Story = {};
