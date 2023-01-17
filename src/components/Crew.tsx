import React from "react";

import axios from "axios";
import { useLoaderData, useNavigate, useParams } from "react-router-dom"; //what for Outlet
import Button from "../components/Button";
import { Credits, MovieDetail } from "../types/api";
import { useState } from "react";
import { posterUrl } from "../utils/movies";

type CurrentData = {
  details: MovieDetail;
  director: string;
  writer: string;
  poster_path: string;
};

export async function loadMovieDetails(loaderObj: any) {
  const movieId = loaderObj.params.movieId;

  try {
    //returns promise; .data takes data
    const details: MovieDetail = (
      await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=039ceb136bde381a9652fedddb79e1f1`
      )
    ).data;

    //returns promise; .data takes data
    const people: Credits = (
      await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=039ceb136bde381a9652fedddb79e1f1`
      )
    ).data;

    const director_name = people.crew.find(
      (member) => member.job === "Director"
    )?.name; //returned member, if 39 === true

    const writer_name = people.crew.find(
      (member) => member.job === "Writer"
    )?.name;

    const currentData = {
      details: details,
      director: director_name,
      writer: writer_name,
    };

    return currentData;
  } catch (err) {
    console.error(err);
    return null;
  }
}

function MovieDetails(): JSX.Element {
  let { movieId } = useParams();

  const navigate = useNavigate();

  const [state, setState] = useState("start");

  const currentData = useLoaderData() as CurrentData;

  const movie_score: number = currentData.details.popularity;
  const movie_length: number | null = currentData.details.runtime;
  const director: string = currentData.director;
  const poster_path: string = posterUrl + currentData.details.poster_path;

  //content wrapper contains: img, details-wrapper, button
  //page_wrapper will contain Navigation and Content Wrapper
  //pt-[75px] goes away when Nav gets integrated
  //bg-dark h-[667px] w-[375px] goes in Home Componente oder in tailwind-theme fÃ¼r #root
  //mb-[50px] for details_wrapper SHPOULD NO BE THERE
  //absolute / fixed positioning does NOT work for buttom (??!!??)

  const MovieDetails = (
    <div
      id="image_wrapper"
      className="h-[211px] pt-0 mb-6 p-0 w-full overflow-hidden rounded-lg"
    >
      <img
        alt=""
        className="object-cover relative top-[-40%]"
        src={poster_path}
      ></img>
    </div>
  );

  return MovieDetails;
}

export default MovieDetails;

//http://localhost:5173/315162 EXAMPLE URL TO TEST
//https://api.themoviedb.org/3/movie/315162/credits?api_key=039ceb136bde381a9652fedddb79e1f1
