import React from "react";
import "../index.css";

interface ButtonProps {
  label: string;
  onClick: (event: React.FormEvent<any>) => void;
  //primary: boolean; //type
  disabled: boolean; //state
  //small: boolean; //size
}

function Button({
  label, disabled
}:
ButtonProps){
  const button = (
    <button

      type="button"
      className={
        `text-center rounded-lg w-full h-12 text-primary text-dark-light ${(disabled)? 'bg-yellow-dimmed':'bg-yellow'}`
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
