type props = {
  url: string;
};
export function MovieCard({ url }: props) {
  return <img src={url} />;
}
