import { GenreButton } from "./GenreButton";
import { genres } from "../utils/genres";
import { capitalizeString } from "../utils/capitalize";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

type props = {
  open: boolean;
};
export function GenreSelectionModal({ open = false }: props) {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <div className="grid grid-cols-4 gap-9">
          {Object.keys(genres).map((genre) => {
            return (
              <a
                key={genre}
                className="flex flex-col gap-2 items-center hover:cursor-pointer hover:first:bg-white"
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
