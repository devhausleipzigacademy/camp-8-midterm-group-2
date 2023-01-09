import React from "react";
import "../index.css";

//define TYPE of props of react-component outside
interface ButtonProps {
  label: string;
  onClick: (event: React.FormEvent<any>) => void;
  disabled: boolean;
}

function Button({
  label, disabled
}: //make ButtonProps accessable by destructering
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
