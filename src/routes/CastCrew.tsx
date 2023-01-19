import { Tab } from "@headlessui/react";
import { Crew } from "../components/Crew";
import clsx from "clsx";
import { useState } from "react";
import axios from "axios";
import { Credits } from "../types/api";
import { Cast } from "../components/Cast";
import { MovieDetail } from "../types/api";
import { SECRETKEY } from "../utils/movies2";

export async function loadCrewCast(loaderObj: any) {
  const movieId = loaderObj.params.movieId;

  try {
    //returns promise; .data takes data
    const details: MovieDetail = (
      await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${SECRETKEY}`
      )
    ).data;

    //returns promise; .data takes data
    const credits: Credits = (
      await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${SECRETKEY}`
      )
    ).data;

    const currentData = {
      details: details,
      cast: credits.cast,
      crew: credits.crew,
    };

    console.log(currentData);
    return currentData;
  } catch (err) {
    console.error(err);
    return null;
  }
}

type ButtonProps = {};

export function CastCrew(): JSX.Element {
  const [active, setActive] = useState(false);

  return (
    <div className="bg-dark h-full w-screen px-5 scrollbar-hide scrollbar-hide::-webkit-scrollbar">
      <h1 className="text-title text-center py-5">Cast & Crew</h1>
      <Tab.Group>
        <Tab.List>
          <div className="flex flex-row content-center justify-between mb-6 text-center ">
            <Tab
              className={({ selected }) =>
                clsx(
                  selected &&
                    " bg-white-dimmed text-body text-white border-2 border-white w-40 h-6 rounded-md",
                  !selected &&
                    " text-primary w-40 h-6 rounded-md bg-dark-light text-body opacity-40"
                )
              }
            >
              Cast
            </Tab>

            <Tab
              className={({ selected }) =>
                clsx(
                  selected &&
                    "text-center bg-white-dimmed text-body text-white border-2 border-white rounded-md w-40 h-6",
                  !selected &&
                    "text-center text-primary rounded-md w-40 h-6 bg-dark-light text-body opacity-40"
                )
              }
            >
              Crew
            </Tab>
          </div>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="flex flex-col gap-3">
            {""}
            <Cast />
          </Tab.Panel>
          <Tab.Panel className="flex flex-col gap-3">
            {""}
            <Crew />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
