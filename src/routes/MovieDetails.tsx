import axios from "axios";
import { ReactNode } from "react";
import { useLoaderData, useParams } from "react-router-dom"; //what for Outlet
import Button from "../components/Button";
import {
  CurrentData,
  CurrentMoviePeople,
  Genre,
  MovieDetailsType,
} from "./MovieDetailsTypes";

//what is this again?
export async function loadMovieDetails(
  loaderObj: any
): Promise<CurrentData | undefined> {
  const movieId = loaderObj.params.movieId;

  try {
    const details: MovieDetailsType = (
      await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=039ceb136bde381a9652fedddb79e1f1`
      )
    ).data;

    const people: CurrentMoviePeople = (
      await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=039ceb136bde381a9652fedddb79e1f1`
      )
    ).data;

    //this may be not right
    const currentData: CurrentData = {
      details: details,
      people: people, //people contains ID, Crew, Cast. Crew and Cast are an Array with objects of Type Cast
    };

    return currentData;
  } catch (err) {
    console.error(err);
  }
}

function MovieDetails(): JSX.Element {

  let { movieId } = useParams(); //what is this?
  const currentData = useLoaderData() as CurrentData;

  function find(job: string): string {
    //we are looking through an array
    //currentData.people.cast is an array of objects
    let Name = ""
    for (const element of currentData.people.cast) {
      console.log("line 54, element" + element)
      //now we are looking in every object (element <-> current Object)
      for (const [key] of Object.entries(key)) {
        if (element.department && (key == job)) {
          Name = element.department
          console.log("Line 58 : Name = " + Name)
          return Name}
        return Name
      }
    }
    Name = Name
    console.log("line 64 , Name" + Name)
    return Name
  }

  const movie_name: string = currentData.details.title;
  const movie_category: Genre[] = currentData.details.genres;
  // const movie_year: string = (currentData.details.release_date); //getFullYear()
  const movie_score: number = currentData.details.popularity;
  const movie_length: number = currentData.details.runtime;
  const director: string = find("director");
  const writer: string = find("writer");
  const movie_synopsis = "";

  const MovieDetails = (
    <div>
      {/* <DetailHeaderLayout /> //not in main branch yet*/}

      <img className="pt-[24px] w-[100%] h-[211px]"></img>
      <h2 className="text-xl leading-[24.2px] text-white font-bold">
        {movie_name}
      </h2>
      <div id="general_details" className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-6">
            {/* <p className="text-white text-description">{(movie_year.getFullYear).toString}</p> */}
            <p className="text-white-dimmed text-description">
              {movie_category[0] + "," + movie_category[1]}
            </p>
            <p className="text-white-dimmed text-description">{movie_length}</p>
          </div>
          <p className="text-white-dimmed text-description">
            <span className="text-[rgba(34, 197, 94, 1)]">{movie_score}</span>
            "movie_score"
          </p>
        </div>
      </div>
      <div id="people" className="flex flex-row-2 gap-[22px]">
        <div>
          <div id="director"></div>
          <p>director: </p>
          <p>{director}</p>
          <div id="writer"></div>
          <p>writer: </p>
          <p>{writer}</p>
        </div>
        <Button
          type="primary"
          height="small"
          label="Cast&Crew"
          onClick={() => {}}
        />
      </div>
      <div className="bg-white-dimmed-heavy min-h-[1px]"></div>
      <h3 className="text-white font-primary">{movie_synopsis}"</h3>
      <p className="text-white-dimmed font-body">{movie_synopsis}</p>
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


//http://localhost:5173/315162 EXAMPLE URL TO TEST
//https://api.themoviedb.org/3/movie/315162/credits?api_key=039ceb136bde381a9652fedddb79e1f1