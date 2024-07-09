import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta: Meta<typeof Header> = {
    title: "Component/Header",
    component: Header,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen", // Adjusts the layout. Options: 'fullscreen', 'padded', 'centered'
        viewport: {
            // Adjusts the viewport size
            defaultViewport: "responsive" // Options include: 'responsive', 'iphone6', 'iphone6p', 'ipad', etc.
        }
    }
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
