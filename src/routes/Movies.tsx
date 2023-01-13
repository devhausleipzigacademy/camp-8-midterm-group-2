import { useLoaderData } from "react-router-dom";
import { MoviePagination } from "../components/MoviePagination";

export function Movies(): JSX.Element {
  const upcomingMovies = useLoaderData() as Movie[];

  return (
    <section className="flex-1">
      {/* // Here to develop as I cant handle storybook with a loader function */}
      <MoviePagination />
    </section>
  );
}
