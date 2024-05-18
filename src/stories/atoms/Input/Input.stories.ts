import { fn } from "@storybook/test";
import Input from "./Input";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Enter text",
    value: ""
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
    value: ""
  },
};
