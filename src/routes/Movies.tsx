import { useLoaderData } from "react-router-dom";

type MovieType = {
  one: string;
  two: number;
};
export function MoviesLoader(): MovieType[] {
  // make API Call for 20 recent movies
  // catch errors
  // return them for later usage
  return [{ one: "a", two: 2 }];
}

export function Movies(): JSX.Element {
  const movies = useLoaderData();
  return (
    <>
      <section className="text-2xl text-black p-10 grid gap-5 grid-cols-2 grid-rows-2 border">
        {movies.map((movie) => {
          return <p className="border p-2">{JSON.stringify(movie)}</p>;
        })}
      </section>
    </>
  );
}
