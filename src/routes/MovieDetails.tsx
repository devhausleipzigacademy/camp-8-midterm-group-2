import { Outlet, useLoaderData, useParams } from "react-router-dom";

type props = {
  params: {
    movieId: string;
  };
};
export async function loadMovieDetails({ params }: props): Promise<string> {
  return params.movieId;
}

export function MovieDetails(): JSX.Element {
  const movie: string = useLoaderData();
  return (
    <div>
      <h1>{movie}</h1>
    </div>
  );
}
