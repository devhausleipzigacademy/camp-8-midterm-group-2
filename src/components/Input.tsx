import { useRef } from "react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";

type props = {
  type: string;
};

export function Input({ type }: props) {
  let placeholder: string;
  if (type === "email") {
    placeholder = "your@email.com";
  } else {
    placeholder = "enter your password";
  }

  return (
    <label className="focus-within:border-white-dimmed-heavy flex items-center gap-3 bg-dark-light border-2 rounded-md border-dark-light py-3 px-5 w-full">
      {type === "email" ? (
        <EnvelopeIcon className="w-6 aspect-square text-white-dimmed" />
      ) : (
        <LockClosedIcon className="w-6 aspect-square text-white-dimmed" />
      )}
      <input
        type={type}
        className="bg-dark-light focus:outline-none text-white placeholder:text-white-dimmed w-full"
        placeholder={placeholder}
      />
    </label>
  );
}
