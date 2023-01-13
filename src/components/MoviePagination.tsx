import { Movie } from "../types/api";
import { useState } from "react";
import { MovieCard } from "./MovieCard";
import { Link } from "react-router-dom";

type MoviePaginationProps = {
  upcomingMovies: Movie[];
  itemsPerPage?: number;
};
export function MoviePagination({
  upcomingMovies,
  itemsPerPage = 4,
}: MoviePaginationProps) {
  const [movies, setMovies] = useState(upcomingMovies.slice(0, 4));

  console.log(upcomingMovies.length);
  const pages = Math.floor(upcomingMovies.length / itemsPerPage);
  const pageArray = Array.from({ length: pages }, (_, i) => i + 1);

  return (
    <>
      <div className="text-white text-3xl">
        {movies.map((movie) => {
          return (
            <Link to={movie.id.toString()}>
              <MovieCard
                poster_path={movie.poster_path}
                title={movie.title}
                key={movie.title}
              />
            </Link>
          );
        })}
      </div>
      <div className="flex justify-around">
        {pageArray.map((pageNr) => {
          const endPagination = pageNr * itemsPerPage;
          const startPagination = endPagination - itemsPerPage;

          return (
            <button
              className="bg-yellow p-3 rounded"
              key={pageNr}
              onClick={(event) => {
                setMovies(upcomingMovies.slice(startPagination, endPagination));
              }}
            >
              {pageNr}
            </button>
          );
        })}
      </div>
    </>
  );
}
