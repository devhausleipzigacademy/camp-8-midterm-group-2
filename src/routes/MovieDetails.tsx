import { Outlet, useLoaderData, useParams } from "react-router-dom";
import { DetailHeader } from "../components/DetailHeaderLayOut";

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

    console.log("TEST" + JSON.stringify(people))

    const currentData = {
      details: details,
      director: director_name? director_name : "Unknown Director",
      writer: writer_name? director_name : "Unknown Writer"
    };

    return currentData;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export function MovieDetails(): JSX.Element {
  /* const movie: string = useLoaderData(); */
  const detailHeaderProps = {
    title: "Movie Details",
  };

  return (
    <div>
      <DetailHeader {...detailHeaderProps} />
    </div>
  );

  return MovieDetails;
}

export default MovieDetails;

//http://localhost:5173/315162 EXAMPLE URL TO TEST
//https://api.themoviedb.org/3/movie/315162/credits?api_key=039ceb136bde381a9652fedddb79e1f1
