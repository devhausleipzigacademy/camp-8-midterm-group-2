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

export const Default: Story = {
  args: {
    movies: [
      { imageUrl: "/src/assets/dev/exampleMovie1.png", title: "Epic movie" },
      {
        imageUrl: "/src/assets/dev/exampleMovie2.png",
        title: "Super nice movie",
      },
      {
        imageUrl: "/src/assets/dev/exampleMovie3.png",
        title: "Not so great movie",
      },
      {
        imageUrl: "/src/assets/dev/exampleMovie4.png",
        title:
          "Just some movie about moviemakers which like to make movies about movies",
      },
    ],
  },
};
