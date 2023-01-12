import { DetailHeader } from "../components/DetailHeaderLayOut";

export function SelectTime(): JSX.Element {
  const detailHeaderProps = {
    title: "Select Time",
    toAddress: "../..",
  };
  return <DetailHeader {...detailHeaderProps}></DetailHeader>;
  return (
    <div>
      <h1>Time</h1>
    </div>
  );
}
