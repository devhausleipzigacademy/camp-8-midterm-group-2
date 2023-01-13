import clsx from "clsx";
import React, { useState } from "react";

type TabsProps = {
  type: string;
  label: string;
};

export function Tabs({ type, label }: TabsProps) {
  const status = ["Selected", "Available"];
  const [active, setActive] = useState(status[0]);
  return (
    <div className="flex justify-center items-center">
      <button
        type="button"
        className={clsx(
          "text-center text-primary rounded-md w-40 h-6 ",
          type === "Available" ? "bg-dark-light text-body opacity-40" : "",
          type === "Selected"
            ? " bg-white-dimmed text-body text-white border-2 border-white"
            : ""
        )}
      >
        {label}
      </button>
    </div>
  );
}
