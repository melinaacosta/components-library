
import { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default Badge",
    color: "default",
  },
};

export const Primary: Story = {
  args: {
    label: "Primary Badge",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Badge",
    color: "secondary",
  },
};

export const Success: Story = {
  args: {
    label: "Success Badge",
    color: "success",
  },
};

export const Warning: Story = {
  args: {
    label: "Warning Badge",
    color: "warning",
  },
};

export const Danger: Story = {
  args: {
    label: "Danger Badge",
    color: "danger",
  },
};
