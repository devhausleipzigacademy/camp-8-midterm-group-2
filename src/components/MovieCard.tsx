import { posterUrl } from "../utils/movies";

export type props = {
  poster_path: string;
  title: string;
};
export function MovieCard({ poster_path, title }: props) {
  const src = posterUrl + poster_path;
  return (
    <div className="w-44 h-56 snap-center">
      <img
        src={src}
        className="w-full h-full object-fill rounded-lg"
        alt={`movie poster for ${title}`}
      />
    </div>
  );
}
