import clsx from "clsx";

type props = {
  className?: string;
};

export function SeatingLegend({ className }: props) {
  return (
    <div
      className={clsx(
        "flex w-full h-full items-center justify-between text-white-dimmed font-medium",
        className
      )}
    >
      <div className="flex gap-1 items-center">
        <div className="w-4 h-4 rounded-full bg-dark-light"></div>
        <p>Available</p>
      </div>
      <div className="flex gap-1 items-center">
        <div className="w-4 h-4 rounded-full bg-yellow"></div>
        <p>Selected</p>
      </div>
      <div className="flex gap-1 items-center">
        <div className="w-4 h-4 rounded-full bg-white"></div>
        <p>Reserved</p>
      </div>
    </div>
  );
}
