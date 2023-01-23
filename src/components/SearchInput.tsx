import { ChangeEvent, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

// ! For later Use
// Link below helps with filling in suggestions to the search input field
// https://5d9774839a6eff00203f5cbf-przshcqifp.chromatic.com/?path=/story/input-textinput-default-suggestion--default-suggestion

export const SearchInput = ({ type, ...props }: any) => {
  const [value, setValue] = useState("");
  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.currentTarget.value);

  return (
    <label className="focus-within:border-white-dimmed-heavy flex items-center gap-3 bg-dark-light border-2 rounded-full border-dark-light py-3 px-5 w-full">
      <MagnifyingGlassIcon className="w-6 aspect-square text-white-dimmed" />
      <input
        className="bg-dark-light focus:outline-none text-white placeholder:text-white-dimmed w-full"
        placeholder={"Search"}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};
