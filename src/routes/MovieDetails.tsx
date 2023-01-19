import axios from "axios";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { Credits, MovieDetail } from "../types/api";
import { useState } from "react";
import { posterUrl } from "../utils/movies";
import { DetailHeader } from "../components/DetailHeaderLayout";

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
      director: director_name ? director_name : "Unknown Director",
      writer: writer_name ? director_name : "Unknown Writer",
    };

    return currentData;
  } catch (err) {
    console.error(err);
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
  const movie_score: number = Math.ceil(currentData.details.vote_average * 10);
  const movie_length: { hours: number; minutes: number } | null = {
    hours: currentData.details.runtime
      ? Math.floor(currentData.details.runtime / 60)
      : 0,
    minutes: currentData.details.runtime ? currentData.details.runtime % 60 : 0,
  };

  const director: string = currentData.director;
  const writer: string = currentData.writer;
  const movie_synopsis = currentData.details.overview;
  const poster_path: string = posterUrl + currentData.details.poster_path;

  const MovieDetails = (
    <div id="page_wrapper" className="w-full h-full m-0 p-0">
      <DetailHeader />

      <div id="content_wrapper" className="px-5 py-0">
        <div
          id="image_wrapper"
          className="h-[210px] pt-0 mb-6 p-0 w-full overflow-hidden rounded-lg"
        >
          <img
            alt={`movie poster for ${movie_name}`}
            className="object-cover relative top-[-40%]"
            src={poster_path}
          ></img>
        </div>

        <div
          id="details_wrapper"
          className="pt-0 mb-12 p-0 flex-row justify-between"
        >
          <h2 className="mt-0 mb-3 text-xl leading-6 text-white font-bold">
            {movie_name}
          </h2>

          <div
            id="section_one"
            className="pt-0 mb-5 flex flex-col justify-between"
          >
            <div id="general_details" className="mb-5 flex justify-between">
              <div className="flex w-full">
                <p className="text-white text-description flex-none mr-6">
                  {movie_year}
                </p>
                <p className="text-white-dimmed text-description flex-none mr-6">
                  {movie_category}
                </p>
                <p className="text-white-dimmed text-description flex-none">
                  {movie_length.hours + "h "}
                  {movie_length.minutes + "min"}
                </p>
                <p className="text-white-dimmed text-description flex-1 text-right">
                  <span className="text-green text-right">
                    {movie_score + " % "}
                  </span>
                  Score
                </p>
              </div>
            </div>
            <div id="cast_&_crew" className="h-10 flex">
              <div
                id="left"
                className="h-9 flex flex-col justify-between flex-1"
              >
                <div id="director" className="flex items-start mt-0">
                  <span className="text-secondary text-white-dimmed mr-1">
                    director:
                  </span>
                  <span className="text-secondary text-white whitespace-nowrap">
                    {" " + director}
                  </span>
                </div>

                <div id="writer" className="flex items-end mb-0 relative top-1">
                  <span className="text-secondary text-white-dimmed mr-1">
                    writer:
                  </span>
                  <span className="text-secondary text-white">
                    {"    " + writer}
                  </span>
                </div>
              </div>

              <div id="right" className="h-10 flex-1 pl-5">
                <Button
                  variant={"primary"}
                  height={"small"}
                  label={"Cast & Crew"}
                  onClick={() => {
                    () => navigate(`castcrew`);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] mb-4 bg-white-dimmed-heavy "></div>

          <div id="section_two">
            <h3 className="text-white text-primary mb-3">Synopsis</h3>

            <p className="text-white-dimmed font-body mb-1 h-13 synopsis-preview">
              {movie_synopsis}
            </p>

            <a href="url" className="text-yellow font-body underline">
              Read more
            </a>
          </div>
        </div>
      </div>
      <div id="button_wrapper" className="">
        <Button
          variant="primary"
          height="default"
          label="Get reservation"
          onClick={() => navigate(`booking`)}
        />
      </div>
    </div>
  );

  return MovieDetails;
}

export default MovieDetails;
