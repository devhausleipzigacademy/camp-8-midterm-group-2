import clsx from "clsx";
import React from "react";
import Button from "./Button";

export interface SeatSelectButtonProps {
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
      disabled={occupied}
      className={clsx(
        "rounded h-[28px] aspect-square disabled:bg-dark-light",
        selected ? "bg-yellow" : "bg-white"
      )}
    ></button>
  );
}
