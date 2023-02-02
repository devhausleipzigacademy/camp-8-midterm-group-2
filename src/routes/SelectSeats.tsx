import { CheckoutPanel } from "../components/CheckoutPanel";
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
      <CheckoutPanel
        seatsChosen={[]}
        click={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      ‚
    </div>
  );
}
