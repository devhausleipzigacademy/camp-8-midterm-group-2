import { DetailHeader } from "../components/DetailHeaderLayOut";

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
