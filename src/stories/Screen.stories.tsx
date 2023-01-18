import react from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Screen } from "../components/Screen";
import "../index.css";

const meta: Meta<typeof Screen> = {
  title: "Booking/Screen",
  component: Screen,
};
export default meta;

type Story = StoryObj<typeof Screen>;

export const Default: Story = {};
