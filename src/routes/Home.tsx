import { useLoaderData } from "react-router-dom";
import { GenreSuggestion } from "../components/GenreSuggestion";
import { MovieCarussel } from "../components/MovieCarussel";
import { SearchInput } from "../components/SearchInput";
import { UserInfo } from "../components/userInfo";
import axios from "axios";
import { UpcomingMovies } from "../types/api";
import { upcomingMoviesUrl } from "../utils/movies";

export async function upcomingMovieLoader() {
  try {
    const response = await axios.get<UpcomingMovies>(upcomingMoviesUrl);
    return response.data.results;
  } catch (error) {
    throw new Error("connection Issues");
  }
}
export function Home(): JSX.Element {
  const upcomingMovies = useLoaderData();

  return (
    <div className="bg-dark flex-1 flex flex-col justify-evenly gap-4 pt-8 overflow-y-scroll scrollbar-hide">
      <div className="px-5">
        <UserInfo userName="USER" userImg="" />
      </div>
      <div className="px-5">
        <SearchInput type="primary" isFocused label="search" />
      </div>
      <div className="px-5">
        <GenreSuggestion />
      </div>
      <MovieCarussel movies={upcomingMovies} />
    </div>
  );
}
