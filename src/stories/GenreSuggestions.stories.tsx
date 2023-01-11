import react from "react";
import { Meta, StoryObj } from "@storybook/react";
import { GenreSuggestion } from "../components/GenreSuggestion";
import "../index.css";

const meta: Meta<typeof GenreSuggestion> = {
  title: "Movie/GenreSuggestion",
  component: GenreSuggestion,
};
export default meta;

type Story = StoryObj<typeof GenreSuggestion>;

export const Default: Story = {};
