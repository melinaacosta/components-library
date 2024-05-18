// src/components/molecules/ProductCard/ProductCard.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import ProductCard from "./ProductCard";

const meta: Meta<typeof ProductCard> = {
  title: "Molecules/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Example Product",
    imageUrl: "https://via.placeholder.com/300",
    price: 99.99,
    discount: 10,
  },
};
