import react from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SeatingLegend } from "../components/SeatingLegend";

const meta: Meta<typeof SeatingLegend> = {
  title: "Movie/SeatingLegend",
  component: SeatingLegend,
};
export default meta;

type Story = StoryObj<typeof SeatingLegend>;

export const Default: Story = {};
