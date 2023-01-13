import React from "react";

type props = {
  image: string;
  name: string;
  character: string;
};

const crew = [
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
    name: "Sebi",
    character: "Frontend-Developer",
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

export function Crew() {
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
