import axios from "axios";
import { useLoaderData, useNavigate, useParams } from "react-router-dom"; //what for Outlet
import Button from "../components/Button";
import { Credits, MovieDetail } from "../types/api";
import { useState } from 'react';


type CurrentData =
{
  details: MovieDetail;
  director: string;
  writer: string;
}

export async function loadMovieDetails(
  loaderObj: any
) {
  const movieId = loaderObj.params.movieId;

  try {
    const details: MovieDetail = (
      await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=039ceb136bde381a9652fedddb79e1f1`
      )
    ).data;

    const people: Credits = (
      await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=039ceb136bde381a9652fedddb79e1f1`
      )
    ).data;

    const director_name = (people.crew.find((member)=>
      member.job === "Director"))?.name //returned member, if 39 === true


    const writer_name = (people.crew.find((member)=>
      member.job ==="Writer"))?.name


    const currentData  = {
      details: details,
      director_name,
      writer_name,
    };

    return currentData;
  } catch (err) {
    console.error(err);
  }
}

const [state, setState] = useState('start')

function MovieDetails(): JSX.Element {

  let { movieId } = useParams();

  const currentData = useLoaderData() as CurrentData;
  const navigate = useNavigate();




  const movie_name: string = currentData.details.title;
  const movie_category: string = currentData.details.genres[0].name;
  const movie_year: string = currentData.details.release_date;
  const movie_score: number = currentData.details.popularity;
  const movie_length: number | null = currentData.details.runtime;
  const director: string = currentData.director;
  const writer: string = currentData.writer;
  const movie_synopsis = "";

  const MovieDetails = (
    <div className="bg-dark">
      {/* <DetailHeaderLayout /> */}

      <img className="pt-[24px] w-[100%] h-[211px]"></img>
      <h2 className="text-xl leading-[24.2px] text-white font-bold">
        {movie_name}
      </h2>
      <div id="general_details" className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-6">
            <p className="text-white text-description">{movie_year}</p>
            <p className="text-white-dimmed text-description">
              {movie_category}
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
          <div id="director">
            <p className="text-secondary text-white-dimmed">director: </p>
            <p>{director}</p>
          </div>
          <div id="writer"></div>
            <p className="text-secondary text-white-dimmed">writer: </p>
            <p>{writer}</p>
          </div>
        <Button
          type="primary"
          height="small"
          label="Cast&Crew"
          onClick={
            ()=>{(movieId: string) =>navigate('castcrew')}}/>
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