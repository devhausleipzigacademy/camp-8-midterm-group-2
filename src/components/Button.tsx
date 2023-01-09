import React from "react";
import "../index.css";
import { Primary } from "../stores/Button.stories";

interface ButtonProps {
  primary: boolean;
  default_height: boolean;
  label: string;
  onClick: (event: React.FormEvent<any>) => void;
  disabled: boolean; //state
}

function Button({
  primary, default_height, disabled, label
}:
ButtonProps){
  const button = (
    <button
      type="button"
      className={
        `text-center rounded-lg w-full text-primary
        ${(primary)?'bg-yellow text-dark-light':'bg-dark-light text-white'}
        ${(primary&&disabled)? 'bg-yellow-dimmed':''}
        ${(default_height)? 'h-[49px]':'h-[38px]'}`
      }
      //LINK my props to css Classes -> we will use it in Button.stories.tsx
      // style={{}}
    >
      {label}
    </button>
  );
  return button;
};

export default Button;
