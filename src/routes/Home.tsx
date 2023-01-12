import { useLoaderData } from "react-router-dom";
import { GenreSuggestion } from "../components/GenreSuggestion";
import { MovieCarussel } from "../components/MovieCarussel";
import { SearchInput } from "../components/SearchInput";
import { UserInfo } from "../components/userInfo";
import axios from "axios";
import { Movie, UpcomingMovies } from "../types/api";

export async function upcomingMovieLoader() {
  try {
    const response = await axios.get<UpcomingMovies>(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=039ceb136bde381a9652fedddb79e1f1"
    );
    return response.data.results;
  } catch (error) {
    return "WRONG";
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
