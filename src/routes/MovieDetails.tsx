import { useLoaderData } from "react-router-dom"; //what for Outlet
import Button from "../components/Button";

type props = {
  params: {
    movieId: string;
  };
};

type MovieDetailsProps = {
  MovieId: string;
  MovieName: string;
  MovieCategory: string;
  MovieYear: number;
  MovieScore: number;
  MovieLength: string;
  Director: string;
  Writer: string;
  Synopsis: string;
};

const movie_id = "";
const movie_name = "";
const movie_category = "";
const movie_year = "";
const movie_MovieScore = "";
const movie_length = "";
const director = "";
const writer = "";
const movie_synopsis = "";

export async function loadMovieDetails({ params }: props): Promise<string> {
  return params.movieId;
}

function MovieDetails({
  MovieName,
  MovieYear,
  MovieCategory,
  MovieLength,
  MovieScore,
  Director,
  Writer,
  Synopsis,
}: MovieDetailsProps): JSX.Element {
  const CurrentMovie: Object = useLoaderData() as Object;

  const MovieDetails = (
    <div>
      {/* <DetailHeaderLayout /> //not in main branch yet*/}

      <img className="pt-[24px] w-[100%] h-[211px]"></img>
      <h2 className="text-xl leading-[24.2px] text-white font-bold">
        {MovieName}
      </h2>
      <div id="general_details" className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-6">
            <p className="text-white text-description">{MovieYear}</p>
            <p className="text-white-dimmed text-description">
              {MovieCategory}
            </p>
            <p className="text-white-dimmed text-description">{MovieLength}</p>
          </div>
          <p className="text-white-dimmed text-description">
            <span className="text-[rgba(34, 197, 94, 1)]">{MovieScore}</span>
            "MovieScore"
          </p>
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
        <Button
          type="primary"
          height="small"
          label="Cast&Crew"
          onClick={() => {}}
        />
      </div>
      <div className="bg-white-dimmed-heavy min-h-[1px]"></div>
      <h3 className="text-white font-primary">"Synopsis"</h3>
      <p className="text-white-dimmed font-body">{Synopsis}</p>
      <a href="url" className="text-yellow font-body underline">
        Read more
      </a>
      <Button
        type="primary"
        height="default"
        label="Get reservation"
        onClick={() => {}}
      />
    </div>
  );
  return MovieDetails;
}

export default MovieDetails;