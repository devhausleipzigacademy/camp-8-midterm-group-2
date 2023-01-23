import { GenreButton } from "./GenreButton";
import { genres } from "../utils/genres";
import { capitalizeString } from "../utils/capitalize";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import clsx from "clsx";

type selectedStateType = string[];

export function GenreSelectionModal() {
  const [selected, setSelected] = useState<selectedStateType>([]);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <div className="grid grid-cols-4 gap-9">
          {Object.keys(genres).map((genre) => {
            return (
              <a
                key={genre}
                className={clsx(
                  selected.includes(genre) && "[&>button]:bg-white-dimmed",
                  "flex flex-col gap-2 items-center hover:cursor-pointer hover:first:bg-white"
                )}
                onClick={() => {
                  const indexSelected = selected.indexOf(genre);
                  if (indexSelected > -1) {
                    const selCopy = selected.slice();
                    selCopy.splice(indexSelected, 1);
                    setSelected([...selCopy]);
                  } else {
                    setSelected([...selected, genre]);
                  }
                }}
              >
                <GenreButton genre={genre} />
                <p className="font-bold text-xs text-white-dimmed">
                  {capitalizeString(genre)}
                </p>
              </a>
            );
          })}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
