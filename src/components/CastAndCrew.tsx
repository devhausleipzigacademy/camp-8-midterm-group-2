import React from "react";

type props = {
  image: string;
  name: string;
  character: string;
};

export function CastAndCrew({ image, name, character }: props) {
  return (
    <div className="flex items-center gap-5">
      <img src={image} alt="" className="w-16 h-16" />
      <div className="flex flex-col gap-1">
        <div className="text-title"> {name} </div>
        <div className="text-description"> {character}</div>
      </div>
    </div>
  );
}
