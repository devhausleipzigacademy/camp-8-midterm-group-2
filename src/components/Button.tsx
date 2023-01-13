import clsx from "clsx";
import React from "react";

interface ButtonProps {

  type: "primary" | "secondary";
  height: "default" | "small"
  label: string;
  onClick: (event: React.FormEvent<any>) => void;
  disabled?: true; //state
}

function Button({
  type, height, label, disabled
}:
ButtonProps){
  const button = (
    <button
      type="button"
      className=

      {clsx(
        'text-center rounded-lg w-full text-primary',
        (type === "primary" && (!disabled))? 'bg-yellow text-dark-light' : '',
        (type ==="primary" && (disabled))? 'bg-yellow-dimmed text-dark-light' : '',
        (height === "default")? 'py-[16px]':'pt-[12px] pb-[11px]',
        (type === "secondary")? 'bg-dark-light text-white':'')}
    >
      {label}
    </button>
  );
  return button;
};

export default Button;