import { Link } from "react-router-dom";
import { Movie } from "../types/api";
import { MovieCard } from "./MovieCard";

type props = {
  movies: Movie[];
};
export function MovieCarussel({ movies }: props) {
  console.log(movies[0]);
  return (
    <div className="flex flex-col gap-5 w-full">
      <h2 className="text-white font-bold">Upcoming Movies</h2>
      <section className="overflow-x-scroll overscroll-contain snap-x flex space-x-10 scrollbar-hide">
        {movies.map((movie) => (
          <Link to={movie.id.toString()}>
            <MovieCard poster_path={movie.poster_path} title={movie.title} />
          </Link>
        ))}
      </section>
    </div>
  );
}
