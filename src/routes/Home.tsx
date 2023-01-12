import { useLoaderData } from "react-router-dom";
import { GenreSuggestion } from "../components/GenreSuggestion";
import { MovieCarussel } from "../components/MovieCarussel";
import { SearchInput } from "../components/SearchInput";
import { UserInfo } from "../components/userInfo";

export async function upcomingMovieLoader() {
  return [
    {
      imageUrl: "/src/assets/dev/exampleMovie1.png",
      title: "Epic movie",
      url: "/",
    },
    {
      imageUrl: "/src/assets/dev/exampleMovie2.png",
      title: "Super nice movie",
      url: "/",
    },
    {
      imageUrl: "/src/assets/dev/exampleMovie3.png",
      title: "Not so great movie",
      url: "/",
    },
    {
      imageUrl: "/src/assets/dev/exampleMovie4.png",
      title:
        "Just some movie about moviemakers which like to make movies about movies",
      url: "/",
    },
  ];
}
export function Home(): JSX.Element {
  const movies = useLoaderData();
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
      <MovieCarussel movies={movies} />
    </div>
  );
}
