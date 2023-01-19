import { posterUrl } from "../utils/movies";

export type props = {
  poster_path: string | null;
  title: string;
};
export function MovieCard({ poster_path, title }: props) {
  const src = posterUrl + poster_path;
  return (
    <div className="w-32 h-44 snap-center">
      <img
        src={src}
        className="w-full h-full object-fill rounded-lg"
        alt={`movie poster for ${title}`}
      />
    </div>
  );
}
