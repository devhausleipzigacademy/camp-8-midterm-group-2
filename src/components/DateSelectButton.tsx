import clsx from "clsx";

export interface DateSelectButtonProps {
  selected: boolean;
  disabled: boolean;
  onClick: (event: React.FormEvent<any>) => void;
  label: string;
}

export function DateSelectButton({
  selected,
  disabled,
  onClick,
  label,
}: DateSelectButtonProps) {
  return (
    <button
      // Event handler added
      onClick={onClick}
      // Disabled State added
      disabled={disabled}
      // CLSX helps Tailwind understand more complex arguments
      className={clsx(
        // always below styling
        "text-center text-[14px] font-medium rounded-lg w-[70px] h-[29px] disabled:text-white-dimmed-heavy disabled:bg-opacity-0",
        // when selected x, if unselected (default) y
        selected ? "  text-dark-light bg-yellow text" : "text-white-dimmed"
      )}
    >
      {label}
    </button>
  );
}
