import { useState } from "react";
import { Form, useSubmit } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React from "react";
import "../index.css";
import { InputProps } from "./Input";

// ! For later Use
// Link below helps with filling in suggestions to the search input field
// https://5d9774839a6eff00203f5cbf-przshcqifp.chromatic.com/?path=/story/input-textinput-default-suggestion--default-suggestion

export const SearchInput = () => {
  const [value, setValue] = React.useState("");
  const onChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setValue(event.target.value);

  return (
    //     id="searchinput"
    <label className="focus-within:border-white-dimmed-heavy flex items-center gap-3 bg-dark-light border-2 rounded-full border-dark-light py-3 px-5 w-full">
      <MagnifyingGlassIcon className="w-6 aspect-square text-white-dimmed" />
      <input
        className="bg-dark-light focus:outline-none text-white placeholder:text-white-dimmed w-full"
        placeholder={"Search"}
        onChange={onChange}
      />
    </label>
  );
};
