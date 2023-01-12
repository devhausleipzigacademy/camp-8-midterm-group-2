import { Meta, StoryObj } from "@storybook/react";
import "../index.css";
import { MoviePagination } from "../components/MoviePagination";

const meta: Meta<typeof MoviePagination> = {
  title: "Movie/MoviePagination",
  component: MoviePagination,
};
export default meta;

type Story = StoryObj<typeof MoviePagination>;

export const Default: Story = {
  args: {},
};
