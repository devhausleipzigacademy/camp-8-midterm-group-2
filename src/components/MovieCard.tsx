type props = {
  url: string;
  title: string;
};
export function MovieCard({ url, title }: props) {
  return (
    <img
      src={url}
      className="object-contain w-full aspect-[3/4] rounded-lg"
      alt={`movie poster for ${title}`}
    />
  );
}
