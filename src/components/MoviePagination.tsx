import { Movie } from "../types/api";
import { useState } from "react";
import { MovieCard } from "./MovieCard";
import { Link } from "react-router-dom";
import clsx from "clsx";

type MoviePaginationProps = {
  upcomingMovies: Movie[];
  itemsPerPage?: number;
};
export function MoviePagination({
  upcomingMovies,
  itemsPerPage = 4,
}: MoviePaginationProps) {
  const [movies, setMovies] = useState(upcomingMovies.slice(0, 4));

  const pages = Math.floor(upcomingMovies.length / itemsPerPage);
  const pageArray = Array.from({ length: pages }, (_, i) => i + 1);

  const [currentPage, setCurrentPage] = useState(pageArray[0]);

  return (
    <div className="flex flex-col gap-7 w-full h-full">
      <div className="text-white flex-1 text-3xl grid grid-cols-2 gap-5">
        {movies.map((movie) => {
          return (
            <Link
              to={movie.id.toString()}
              className="flex justify-center items-center w-full h-full"
            >
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
              className={clsx(
                "py-2 px-4 rounded-sm text-dark-light ",
                currentPage === pageNr
                  ? "bg-yellow"
                  : "bg-white-dimmed hover:bg-yellow-dimmed"
              )}
              key={pageNr}
              onClick={() => {
                setMovies(upcomingMovies.slice(startPagination, endPagination));
                setCurrentPage(pageNr);
              }}
            >
              {pageNr}
            </button>
          );
        })}
      </div>
    </div>
  );
}
