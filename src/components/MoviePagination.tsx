import { Movie } from "../types/api";
import { useState } from "react";

type MoviePaginationProps = {
  upcomingMovies: Movie[];
};
export function MoviePagination({ upcomingMovies }: MoviePaginationProps) {
  const [movies, setMovies] = useState(upcomingMovies.slice(0, 4));
  return (
    <>
      <div className="text-white text-3xl">
        {movies.map((movie) => {
          return <div>{movie.title}</div>;
        })}
      </div>
      <div className="flex justify-around">
        <button className="bg-yellow p-3" id="1">
          1
        </button>
        <button
          className="bg-yellow p-3"
          id="2"
          onClick={(event) => {
            event.currentTarget.id;
            setMovies(upcomingMovies.slice(4, 8));
          }}
        >
          2
        </button>
      </div>
    </>
  );
}
