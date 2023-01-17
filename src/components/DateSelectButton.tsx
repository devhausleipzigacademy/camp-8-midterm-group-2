import clsx from "clsx";

interface DateSelectButtonProps {
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
      className={clsx(
        "text-center rounded-lg w-70px h-29px  disabled:text-white-dimmed-heavy ",
        selected === true
          ? // FIGMA file says text dark-light for selected, but appears extremely light
            " text-dark-light bg-yellow text"
          : "",
        selected === false ? "text-white-dimmed" : ""
      )}
      disabled={true}
    >
      {label}
    </button>
  );
}
