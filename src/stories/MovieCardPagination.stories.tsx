import react from "react";
import { Meta, StoryObj } from "@storybook/react";
import "../index.css";
import { MoviePagination } from "../components/MoviePagination";

const meta: Meta<typeof MoviePagination> = {
  title: "Movie/MoviePagination",
  component: MoviePagination,
};
export default meta;

type Story = StoryObj<typeof MoviePagination>;

// here we grab a fake object for the story as in the real app
// this data comes from a http request in a loader from tmdb's api
import { upcomingMoviesMock } from "./upcomingmovies.mock.obj";

export const Default: Story = {
  args: { upcomingMovies: upcomingMoviesMock, itemsPerPage: 4 },
};
export const TwoPerPage: Story = {
  args: { upcomingMovies: upcomingMoviesMock, itemsPerPage: 2 },
};
export const SixPerPage: Story = {
  args: { upcomingMovies: upcomingMoviesMock, itemsPerPage: 6 },
};
