import { Movie } from "../types/api";
import { useState } from "react";

type MoviePaginationProps = {
  upcomingMovies: Movie[];
  itemsPerPage: number;
};
export function MoviePagination({
  upcomingMovies,
  itemsPerPage,
}: MoviePaginationProps) {
  const [movies, setMovies] = useState(upcomingMovies.slice(0, 4));

  console.log(upcomingMovies.length);
  const pages = Math.floor(upcomingMovies.length / itemsPerPage);
  const pageArray = Array.from({ length: pages }, (_, i) => i + 1);

  return (
    <>
      <div className="text-white text-3xl">
        {movies.map((movie) => {
          return <div>{movie.title}</div>;
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
