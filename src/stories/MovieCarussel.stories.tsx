import react from "react";
import { Meta, StoryObj } from "@storybook/react";
import "../index.css";
import { MovieCarussel } from "../components/MovieCarussel";

const meta: Meta<typeof MovieCarussel> = {
  title: "Movie/MovieCarussel",
  component: MovieCarussel,
};
export default meta;

type Story = StoryObj<typeof MovieCarussel>;

export const Default: Story = {};
