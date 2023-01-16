import { DetailHeader } from "../components/DetailHeaderLayOut";

export function SelectSeats(): JSX.Element {
  const detailHeaderProps = {
    title: "Select Seats",
  };
  return (
    <div>
      <DetailHeader {...detailHeaderProps} />
    </div>
  );
}
