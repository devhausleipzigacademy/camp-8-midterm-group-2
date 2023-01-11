import { genres, GenreType } from "../utils/genres";

type props = {
  genre: keyof GenreType;
};
export function GenreButton({ genre }: props) {
  return (
    <button className="bg-dark-light rounded-xl p-3 text-3xl">
      {genres[genre].symbol}
    </button>
  );
}
