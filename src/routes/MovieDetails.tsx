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
      director_name,
      writer_name,
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

  const movie_name: string = currentData.details.title;
  const movie_category: string = currentData.details.genres[0].name;
  const movie_year: string = currentData.details.release_date;
  const movie_score: number = currentData.details.popularity;
  const movie_length: number | null = currentData.details.runtime;
  const director: string = currentData.director;
  const writer: string = currentData.writer;
  const movie_synopsis = "";
  const poster_path: string = posterUrl + currentData.details.poster_path;
  console.log("LINE /! " + posterUrl + currentData.details.poster_path);

  //content wrapper contains: img, details-wrapper, button
  //page_wrapper will contain Navigation and Content Wrapper
  //pt-[75px] goes away when Nav gets integrated

  const MovieDetails = (
    <div
      id="page_wrapper"
      className="bg-dark h-[667px] w-[375px] pt-[75px] pb-6 px-[18px] fixed m-0 top-0"
    >
      {/* <DetailHeaderLayout /> */}

      <div id="content_wrapper" className="h-[568px] pt-0">
        <div
          id="image_wrapper"
          className="h-[211px] pt-0 mb-6 p-0 w-[100%] overflow-hidden rounded-lg"
        >
          <img
            alt={`movie poster for ${movie_name}`}
            className="object-cover relative top-[-40%]"
            src={poster_path}
          ></img>
        </div>

        <div
          id="details_wrapper"
          className="h-[233px] pt-0 mb-4 p-0 flex-row justify-between"
        >
          <h2 className="mt-0 mb-3 text-xl leading-[24.2px] text-white font-bold">
            {movie_name}
          </h2>

          <div
            id="section_one"
            className="pt-0 mb-4 h-[65px] flex-col justify-between"
          >
            <div id="general_details" className="pt-0">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-6">
                  <p className="text-white text-description">{movie_year}</p>
                  <p className="text-white-dimmed text-description">
                    {movie_category}
                  </p>
                  <p className="text-white-dimmed text-description">
                    {movie_length}
                  </p>
                </div>

                <p className="text-white-dimmed text-description">
                  <span className="text-[rgba(34, 197, 94, 1)]">
                    {movie_score}
                  </span>
                </p>
              </div>
            </div>
            {/* */}
            <div id="cast_&_crew" className="h-[38px] flex">
              <div id="left" className="flex flex-col flex-1">
                <div id="director" className="">
                  <span className="text-secondary text-white-dimmed">
                    director:{" "}
                  </span>
                  <span>{director}</span>
                </div>

                <div id="writer"></div>
                <span className="text-secondary text-white-dimmed">
                  writer:{" "}
                </span>
                <span>{writer}</span>
              </div>

              <div id="right" className="flex-1">
                <Button
                  type="primary"
                  height="small"
                  label="Cast&Crew"
                  onClick={() => {
                    (movieId: string) => navigate("castcrew");
                  }}
                />
              </div>
            </div>
          </div>

          <div className="w-[100%] h-[1px] mb-4 bg-white-dimmed-heavy "></div>

          <div id="section_two" className="h-[100px] mb-[51px]">
            <h3 className="text-white text-primary mb-3">Synopsis</h3>

            <p className="text-white-dimmed font-body mb-1 h-[50px]">
              After being resurrected by a sinister entity, Art the Clown
              returns to Miles County where .... {movie_synopsis}
            </p>

            <a href="url" className="text-yellow font-body underline">
              Read more
            </a>
          </div>
        </div>
      </div>
      <div id="button_wrapper">
          <Button
            type="primary"
            height="default"
            label="Get reservation"
            onClick={() => {}}
          />
        </div>
    </div>
  );

  return MovieDetails;
}

export default MovieDetails;

//http://localhost:5173/315162 EXAMPLE URL TO TEST
//https://api.themoviedb.org/3/movie/315162/credits?api_key=039ceb136bde381a9652fedddb79e1f1
