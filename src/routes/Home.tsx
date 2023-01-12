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
    <div className="bg-dark">
      <h1>HOME</h1>
      <UserInfo userName="" userImg="" {...UserInfo} />
      <SearchInput
        type="primary"
        isFocused
        onFocus={event}
        label="search"
        {...SearchInput}
      />
      <GenreSuggestion />
      <MovieCarussel movies={upcomingMovies} />
    </div>
  );
}
