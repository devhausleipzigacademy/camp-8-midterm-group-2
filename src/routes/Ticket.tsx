import { DetailHeader } from "../components/DetailHeaderLayout";

export function Ticket(): JSX.Element {
  const detailHeaderProps = {
    title: "Ticket",
  };
  return (
    <div>
      <DetailHeader {...detailHeaderProps} />
    </div>
  );
}
