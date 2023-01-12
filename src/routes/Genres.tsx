import { DetailHeader } from "../components/DetailHeaderLayOut";

export function Genres(): JSX.Element {
  const detailHeaderProps = {
    title: "Genres",
    toAddress: "/",
  };
  return <DetailHeader {...detailHeaderProps}></DetailHeader>;
  return (
    <div>
      <h1>Genres</h1>
    </div>
  );
}
