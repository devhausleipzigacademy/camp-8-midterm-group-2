import { Link } from "react-router-dom";
import { GenreButton } from "./GenreButton";

export function GenreSuggestion() {
  const defaultSuggestions = ["romance", "comedy", "horror", "drama"];
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
        {defaultSuggestions.map((genre) => (
          <div className="flex flex-col gap-2 items-center">
            <GenreButton genre={genre} />
            <p className="font-bold text-white-dimmed text-sm capitalize">
              {genre}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
