import { useLoaderData } from "react-router-dom";

export function Movies(): JSX.Element {
  const upcomingMovies = useLoaderData() as Movie[];

  return <section className="flex-1"></section>;
}
