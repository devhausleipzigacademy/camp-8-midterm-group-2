import { useState } from "react";
import {
  Form,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface SearchInputProps {
  isFocused: boolean;
  type: "primary" | "secondary";
  onFocus: (event: React.FormEvent<any>) => void;
  label: string;
}

export function SearchInput(props: SearchInputProps) {
  return (
    <Form>
      <div className="flex justify-center">
        <MagnifyingGlassIcon />
        <input
          type="text"
          name=""
          placeholder="Search"
          className={clsx(
            "text-center rounded-lg w-full text-primary",
            props.type === "primary" ? "border-2" : ""
          )}
        />
      </div>
    </Form>
  );
}

import clsx from "clsx";
import React from "react";
import "../index.css";
import { Primary } from "../stories/SearchInput.stories";

// interface ButtonProps {
//   type: "primary" | "secondary";
//   height: "default" | "small";
//   label: string;
//   onClick: (event: React.FormEvent<any>) => void;
//   disabled: boolean; //state
// }

// function Button({ type, height, label, disabled }: ButtonProps) {
//   const button = (
//     <button
//       type="button"
//       className={clsx(
//         "text-center rounded-lg w-full text-primary",
//         type === "primary" && disabled === false
//           ? "bg-yellow text-dark-light"
//           : "",
//         type === "primary" && disabled === true
//           ? "bg-yellow-dimmed text-dark-light"
//           : "",
//         height === "default" ? "py-[16px]" : "pt-[12px] pb-[11px]",
//         type === "secondary" ? "bg-dark-light text-white" : ""
//       )}
//     >
//       {label}
//     </button>
//   );
//   return button;
// }

// export default Button;
