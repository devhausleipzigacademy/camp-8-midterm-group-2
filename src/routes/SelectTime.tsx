import { DetailHeader } from "../components/DetailHeaderLayOut";

export function SelectTime(): JSX.Element {
  const detailHeaderProps = {
    title: "Select Time",
  };
  return (
    <div>
      <DetailHeader {...detailHeaderProps} />
    </div>
  );
}
