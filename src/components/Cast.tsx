import axios from "axios";
import { Cast } from "../types/api";

type props = {
  image: string;
  name: string;
  character: string;
};

const apiKey = "039ceb136bde381a9652fedddb79e1f1";
const baseUrl = "https://api.themoviedb.org/3/";
const castUrl = "/movie/{movie_id}/credits";

export async function castLoader() {
  try {
    const response = await axios.get<Cast>(baseUrl + castUrl + apiKey);
    return response.data;
  } catch (error) {
    throw new Error("connection Issues");
  }
}

export function Cast() {
  const cast = castLoader();
  console.log(cast);
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
