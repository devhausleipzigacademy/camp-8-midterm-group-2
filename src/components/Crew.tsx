import React from "react";
import axios from "axios";

type props = {
  image: string;
  name: string;
  character: string;
};

export async function crewLoader(res: props) {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/22/credits?api_key=039ceb136bde381a9652fedddb79e1f1"
    );
    console.log(res.data);
  } catch (error) {
    console.error("Couldn't reach the API");
  }
}

const crew = [
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
    name: "Sebi", // {data.name}
    character: "Frontend-Developer", // {data.job}
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
    name: "Kika",
    character: "Frontend-Developer",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
    name: "Thomas",
    character: "Frontend-Developer",
  },
];

export function Crew(crewLoader: props) {
  return (
    <div>
      {crew.map((actor) => (
        <div className="flex items-center gap-5">
          <img src={actor.image} alt="" className="w-16 h-16" />
          <div className="flex flex-col gap-1">
            <div className="text-title"> {actor.name} </div>
            <div className="text-description"> {actor.character}</div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}
