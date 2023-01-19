import { useNavigate } from "react-router-dom";
import { DetailHeader } from "../components/DetailHeaderLayOut";

export function CastCrew(): JSX.Element {
  const detailHeaderProps = {
    title: "Cast and Crew",
  };
  return <DetailHeader {...detailHeaderProps} />;
}
