import { Link } from "react-router-dom";
import { GenreButton } from "./GenreButton";

export function GenreSuggestion() {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-white-dimmed">Genre</h2>
        <Link to="#" className="text-yellow-dimmed justify-center">
          See All
          <img
            src="/src/assets/chevron.svg"
            className="opacity-50 inline-block ml-4"
          />
        </Link>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <GenreButton genre="romance" />
          <p className="font-bold text-white-dimmed text-sm">Romance</p>
        </div>
        <div className="flex flex-col gap-2">
          <GenreButton genre="comedy" />
          <p className="font-bold text-white-dimmed text-sm">Comedy</p>
        </div>
        <div className="flex flex-col gap-2">
          <GenreButton genre="horror" />
          <p className="font-bold text-white-dimmed text-sm">Horror</p>
        </div>
        <div className="flex flex-col gap-2">
          <GenreButton genre="drama" />
          <p className="font-bold text-white-dimmed text-sm">Drama</p>
        </div>
      </div>
    </section>
  );
}
