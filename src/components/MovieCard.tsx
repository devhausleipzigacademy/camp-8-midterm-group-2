type props = {
  url: string;
  title: string;
};
export function MovieCard({ url, title }: props) {
  return (
    <img
      src={url}
      width="178"
      height="224"
      className="object-contain rounded-lg"
      alt={`movie poster for ${title}`}
    />
  );
}
