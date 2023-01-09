import { genres, GenreType } from "../utils/genres";

type props = {
  variant: keyof GenreType;
};
export function GenreButton({ variant }: props) {
  return (
    <>
      <button className="bg-yellow flex justify-center items-center p-8 text-black">
        {genres[variant].symbol}
      </button>
      ;
    </>
  );
}
