import { MovieCard, props as MovieProps } from "./MovieCard";

type props = {
  movies: MovieProps[];
};
export function MovieCarussel({ movies }: props) {
  return (
    <div>
      <h2 className="text-white font-bold">Upcoming Movies</h2>
      <section>
        {movies.map((movie) => (
          <MovieCard url={movie.url} title={movie.title} />
        ))}
      </section>
    </div>
  );
}
