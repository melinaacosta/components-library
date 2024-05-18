import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Accept Terms and Conditions",
    checked: false,
    onChange: action("changed"),
  },
};

export const Checked: Story = {
  args: {
    label: "Accept Terms and Conditions",
    checked: true,
    onChange: action("changed"),
  },
};
