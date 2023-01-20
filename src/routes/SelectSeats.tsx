import { DetailHeader } from "../components/DetailHeaderLayout";
import { SeatingLegend } from "../components/SeatingLegend";

export function SelectSeats(): JSX.Element {
  const detailHeaderProps = {
    title: "Select Seats",
  };
  return (
    <div>
      <DetailHeader {...detailHeaderProps} />
      <SeatingLegend />
    </div>
  );
}
