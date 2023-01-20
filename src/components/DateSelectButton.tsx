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
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "text-center text-[14px] font-medium rounded px-2 py-1 disabled:text-white-dimmed-heavy disabled:bg-opacity-0",
        selected ? "  text-dark-light bg-yellow text" : "text-white-dimmed"
      )}
    >
      {label}
    </button>
  );
}
