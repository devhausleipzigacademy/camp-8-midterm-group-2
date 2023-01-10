import { Link } from "react-router-dom";
import { MovieCard, props as MovieCardProp } from "./MovieCard";

interface MovieProps extends MovieCardProp {
  url: string;
}

type props = {
  movies: MovieProps[];
};
export function MovieCarussel({ movies }: props) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-white font-bold">Upcoming Movies</h2>
      <section className="flex gap-8">
        {movies.map((movie) => (
          <Link to={movie.url}>
            <MovieCard imageUrl={movie.imageUrl} title={movie.title} />
          </Link>
        ))}
      </section>
    </div>
  );
}
