import react from "react";
import { Meta, StoryObj } from "@storybook/react";
import "../index.css";
import { CheckoutPanel } from "../components/CheckoutPanel";

const meta: Meta<typeof CheckoutPanel> = {
  title: "Movie/CheckoutPanel",
  component: CheckoutPanel,
};

export default meta;

type Story = StoryObj<typeof CheckoutPanel>;

export const Default: Story = {
  args: {},
};
