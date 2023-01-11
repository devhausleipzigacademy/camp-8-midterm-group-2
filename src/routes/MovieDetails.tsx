import { Outlet, useLoaderData, useParams } from "react-router-dom";
import Button from "../components/Button";

type props = {
  params: {
    movieId: string;
  };
};

type MovieDetailsProps = {
  MovieName: string;
  Category: string;
  Year: number;
  Score: number;
  Length: string;
  Director: string;
  Writer: string;
};

export async function loadMovieDetails({ params }: props): Promise<string> {
  return params.movieId;
}

function MovieDetails({
  MovieName,
  Year,
  Category,
  Length,
  Score,
  Director,
  Writer,
}: MovieDetailsProps): JSX.Element {
  const CurrentMovie: Object = useLoaderData() as Object;

  const MovieDetails = (
    <div>
      {/* <DetailHeaderLayout /> */}

      <img className="pt-[24px] w-[100%] h-[211px]"></img>
      <h2 className="text-xl leading-[24.2px] text-white font-bold">{MovieName}</h2>
      <div id="general_details" className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-6">
            <p className="text-white text-description">{Year}</p>
            <p className="text-white-dimmed text-description">{Category}</p>
            <p className="text-white-dimmed text-description">{Length}</p>
          </div>
          <p className="text-white-dimmed text-description"><span className="text-[rgba(34, 197, 94, 1)]">{Score}</span>"Score"</p>
        </div>
      </div>
      <div id="people" className="flex flex-row-2 gap-[22px]">
        <div>
          <div id="director"></div>
          <p>Director: </p>
          <p>{Director}</p>
          <div id="writer"></div>
          <p>Writer: </p>
          <p>{Writer}</p>
        </div>
        <Button type="primary" height="small" label="Cast&Crew" onClick={()=>{}} />
      </div>
      <div className="bg-white-dimmed-heavy min-h-[1px]"></div>
      <h3>"Synopsis"</h3>
    </div>
  );
  return MovieDetails;
}

export default MovieDetails;
