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
      {
        poster_path: "/v8Ze2BUan0iMAReijoFcNAe4IIX.jpg",
        title: "Epic movie",
        url: "#",
      },
      {
        poster_path: "/bGlTTHAhLJXIXb1a0zyBEPqtxV9.jpg",
        title: "Super nice movie",
        url: "#",
      },
      {
        poster_path: "/wDed9MJgcRNs34ncGuegjr7ik42.jpg",
        title: "Not so great movie",
        url: "#",
      },
      {
        poster_path: "/wjOHjWCUE0YzDiEzKv8AfqHj3ir.jpg",
        title:
          "Just some movie about moviemakers which like to make movies about movies",
        url: "#",
      },
    ],
  },
};
