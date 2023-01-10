import react from "react";
import { Meta, StoryObj } from "@storybook/react";
import "../index.css";
import { MovieCard } from "../components/MovieCard";

const meta: Meta<typeof MovieCard> = {
  title: "Movie/MovieCard",
  component: MovieCard,
};
export default meta;

type Story = StoryObj<typeof MovieCard>;

export const Default: Story = {
  args: { url: "/src/assets/dev/exampleMovie1.png" },
};
