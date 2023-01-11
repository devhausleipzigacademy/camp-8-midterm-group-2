import react from "react";
import { Meta, StoryObj } from "@storybook/react";
import "../index.css";
import { MovieCard } from "../components/MovieCard";

const imageUrls = [
  "/src/assets/dev/exampleMovie1.png",
  "/src/assets/dev/exampleMovie2.png",
  "/src/assets/dev/exampleMovie3.png",
  "/src/assets/dev/exampleMovie4.png",
];
const meta: Meta<typeof MovieCard> = {
  title: "Movie/MovieCard",
  component: MovieCard,
  argTypes: {
    imageUrl: {
      options: imageUrls,
      control: { type: "radio" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof MovieCard>;

export const Default: Story = {
  args: { imageUrl: "/src/assets/dev/exampleMovie1.png", title: "Epic movie" },
};
