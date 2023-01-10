import { MovieCard, props as MovieCardProp } from "./MovieCard";

interface MovieProps extends MovieCardProp {
  // url: string;
}

type props = {
  movies: MovieProps[];
};
export function MovieCarussel({ movies }: props) {
  return (
    <div>
      <h2 className="text-white font-bold">Upcoming Movies</h2>
      <section>
        {movies.map((movie) => (
          <MovieCard imageUrl={movie.imageUrl} title={movie.title} />
        ))}
      </section>
    </div>
  );
}
