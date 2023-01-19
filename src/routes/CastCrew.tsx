import { useNavigate } from "react-router-dom";
import { DetailHeader } from "../components/DetailHeaderLayout";

export function CastCrew(): JSX.Element {
  const detailHeaderProps = {
    title: "Cast and Crew",
  };
  return <DetailHeader {...detailHeaderProps} />;
}
