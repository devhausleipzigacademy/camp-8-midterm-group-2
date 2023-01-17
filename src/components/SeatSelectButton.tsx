import clsx from "clsx";

interface SeatSelectButtonProps {
  selected: boolean;
  occupied: boolean;
  onClick: (event: React.FormEvent<any>) => void;
}

export function SeatSelectButton({
  selected,
  occupied,
  onClick,
}: SeatSelectButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        // w and h based on idea that button takes up spoace on a grid
        "rounded-lg w-full h-full",
        selected === true && occupied === false ? "bg-yellow" : "bg-dark-light",
        selected === false && occupied === false ? "bg-white" : "bg-dark-light"
      )}
    ></button>
  );
}
