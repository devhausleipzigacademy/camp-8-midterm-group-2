import { useLoaderData } from "react-router-dom";
import { MoviePagination } from "../components/MoviePagination";
import { Movie } from "../types/api";

export function Movies(): JSX.Element {
  const upcomingMovies = useLoaderData() as Movie[];

  return (
    <section className="flex-1 pt-3 px-2">
      <MoviePagination upcomingMovies={upcomingMovies} />
    </section>
  );
}
