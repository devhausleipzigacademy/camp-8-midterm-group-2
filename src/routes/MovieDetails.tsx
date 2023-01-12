import axios from "axios";
import { useLoaderData } from "react-router-dom"; //what for Outlet
import Button from "../components/Button";
import { MovieDetailsType } from "./MovieDetailsType";

type props = {
    MovieId: string;
};


export async function loadMovieDetails(MovieId: string): Promise<MovieDetailsType> {
  const result: MovieDetailsType = (await axios.get(`https://api.themoviedb.org/3/movie/${MovieId}?api_key=039ceb136bde381a9652fedddb79e1f1`)).data as MovieDetailsType;
  return result;
}

const CurrentMovie: MovieDetailsType = useLoaderData() as MovieDetailsType; //can this be outside the Component?

const movie_name: string = CurrentMovie.original_title;
const movie_category: unknown = [""]
const movie_year = CurrentMovie.genres;
const movie_movie_score = CurrentMovie.popularity
const movie_length = CurrentMovie.runtime
const director = ""
const writer = "";
const movie_synopsis = "";


function MovieDetails({
  MovieId, //may not need it a second time
}: props): JSX.Element {


  const MovieDetails = (
    <div>
      {/* <DetailHeaderLayout /> //not in main branch yet*/}

      <img className="pt-[24px] w-[100%] h-[211px]"></img>
      <h2 className="text-xl leading-[24.2px] text-white font-bold">
        movie_name
      </h2>
      <div id="general_details" className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-6">
            <p className="text-white text-description">movie_year</p>
            <p className="text-white-dimmed text-description">
              movie_category
            </p>
            <p className="text-white-dimmed text-description">movie_length</p>
          </div>
          <p className="text-white-dimmed text-description">
            <span className="text-[rgba(34, 197, 94, 1)]">movie_score</span>
            "movie_score"
          </p>
        </div>
      </div>
      <div id="people" className="flex flex-row-2 gap-[22px]">
        <div>
          <div id="director"></div>
          <p>director: </p>
          <p>director</p>
          <div id="writer"></div>
          <p>writer: </p>
          <p>writer</p>
        </div>
        <Button
          type="primary"
          height="small"
          label="Cast&Crew"
          onClick={() => {}}
        />
      </div>
      <div className="bg-white-dimmed-heavy min-h-[1px]"></div>
      <h3 className="text-white font-primary">"movie_synopsis"</h3>
      <p className="text-white-dimmed font-body">movie_synopsis</p>
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








