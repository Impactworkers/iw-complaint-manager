import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { expect, userEvent, within } from "@storybook/test";
import { redirect, getRouter } from "@storybook/nextjs/navigation.mock";

const meta: Meta<typeof Header> = {
    title: "Component/Header",
    component: Header,
    parameters: {
        nextjs: {
            appDirectory: true
        }
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const ProfileIconClicked: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const avatar = await canvas.findByText("JA");

        await userEvent.click(avatar);
    }
};
