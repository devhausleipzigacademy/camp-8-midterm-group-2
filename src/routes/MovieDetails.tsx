import { Outlet, useLoaderData, useParams } from "react-router-dom";
import { DetailHeader } from "../components/DetailHeaderLayOut";

type props = {
  params: {
    movieId: string;
  };
};

export async function loadMovieDetails({ params }: props): Promise<string> {
  return params.movieId;
}

export function MovieDetails(): JSX.Element {
  /* const movie: string = useLoaderData(); */

  return (
    <div>
      <h1>Movie ID</h1>
    </div>
  );
}
