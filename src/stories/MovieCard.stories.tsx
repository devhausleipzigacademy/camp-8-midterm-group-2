import react from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MovieCard } from "../components/MovieCard";

const poster_paths = [
  "A-1",
  "A-2",
  "A-3",
  "A-4",
  "A-5",
  "A-6",
  "B-1",
  "B-2",
  "B-3",
  "B-4",
  "B-5",
  "B-6",
  "B-7",
  "B-8",
  "C-1",
  "C-2",
  "C-3",
  "C-4",
  "C-5",
  "C-6",
  "C-7",
  "C-8",
  "D-1",
  "D-2",
  "D-3",
  "D-4",
  "D-5",
  "D-6",
  "D-7",
  "D-8",
  "E-1",
  "E-2",
  "E-3",
  "E-4",
  "E-5",
  "E-6",
  "E-7",
  "E-8",
  "F-1",
  "F-2",
  "F-3",
  "F-4",
  "F-5",
  "F-6",
];
const meta: Meta<typeof MovieCard> = {
  title: "Movie/MovieCard",
  component: MovieCard,
  argTypes: {
    poster_path: {
      options: poster_paths,
      control: { type: "checkbox" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof MovieCard>;

export const Default: Story = {
  args: {
    poster_path: "/S99eCSnRFfeZJmDaIGIZF58H7w.jpg",
    title: "Epic movie",
  },
};
