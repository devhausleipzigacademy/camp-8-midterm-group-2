import { useRef } from "react";

export function Input() {
  const inputRef = useRef();

  return (
    <div
      onClick={() => inputRef.current.focus()}
      className="focus-within:border-white-dimmed-heavy flex items-center gap-3 bg-dark-light border-2 rounded-md border-dark-light py-3 px-5 w-full"
    >
      <div
        onClick={() => inputRef.current.focus()}
        className="w-6 aspect-square bg-white-dimmed"
      ></div>
      <input
        type="email"
        ref={inputRef}
        className="bg-dark-light focus:outline-none text-white placeholder:text-white-dimmed w-full"
        placeholder="your@email.com"
      />
    </div>
  );
}
