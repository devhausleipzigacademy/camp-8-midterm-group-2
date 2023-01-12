import { DetailHeader } from "../components/DetailHeaderLayOut";

export function CastCrew(): JSX.Element {
  const detailHeaderProps = {
    title: "Cast and Crew",
    toAddress: "../movie/details",
  };
  return <DetailHeader {...detailHeaderProps}></DetailHeader>;
}
