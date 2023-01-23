import { GenreButton } from "./GenreButton";
import { genres } from "../utils/genres";
import { capitalizeString } from "../utils/capitalize";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import clsx from "clsx";
import { DetailHeader } from "../components/DetailHeaderLayout";
import Button from "./Button";

type selectedStateType = string[];

export function GenreSelectionModal() {
  const [selected, setSelected] = useState<selectedStateType>([]);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <div className="flex flex-col justify-between">
          <DetailHeader title="Genres" />
          <div className="grid grid-cols-4 gap-x-9 gap-y-9">
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

          <div>
            <div className="font-bold text-xs text-white-dimmed flex gap-1">
              <p className="text-white">{selected.length}</p>
              <p className=""> Genres selected</p>
            </div>
            <Button
              height="default"
              onClick={() => {
                //will implement in #80
              }}
              variant="primary"
              label="Confirm selected Genres"
            />
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}