export type props = {
  imageUrl: string;
  title: string;
};
export function MovieCard({ imageUrl, title }: props) {
  return (
    <div className="w-44 h-56 snap-center">
      <img
        src={imageUrl}
        className="w-full h-full object-fill rounded-lg"
        alt={`movie poster for ${title}`}
      />
    </div>
  );
}
