import { DetailHeader } from "../components/DetailHeaderLayout";

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
