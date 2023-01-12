import { DetailHeader } from "../components/DetailHeaderLayOut";

export function SelectSeats(): JSX.Element {
  const detailHeaderProps = {
    title: "Select Seats",
    toAddress: "../selecttime",
  };
  return <DetailHeader {...detailHeaderProps}></DetailHeader>;
  return (
    <div>
      <h1>Seats</h1>
    </div>
  );
}
