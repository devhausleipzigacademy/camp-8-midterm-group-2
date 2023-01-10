export type props = {
  imageUrl: string;
  title: string;
};
export function MovieCard({ imageUrl, title }: props) {
  return (
    <img
      src={imageUrl}
      width="178"
      height="224"
      className="object-contain rounded-lg"
      alt={`movie poster for ${title}`}
    />
  );
}
