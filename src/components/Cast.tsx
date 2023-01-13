import React from "react";

type props = {
  image: string;
  name: string;
  character: string;
};

export async function castLoader() {
  try {
    const response = await axios.get<Cast>()
    
  }
}

const cast = [
  {
    image: "",
    name: "Leonardo diCaprio",
    character: "Elodin",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
    name: "Gandalf",
    character: "Bilbo",
  },
];

export function Cast() {
  return (
    <div>
      {cast.map((actor) => (
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
