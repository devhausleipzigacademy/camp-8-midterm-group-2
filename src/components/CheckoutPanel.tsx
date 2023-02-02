import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { SeatSelectButton } from "./SeatSelectButton";
import { Transition } from "@headlessui/react";
import { useSeatStore } from "../stores/BookingStore";

export type CheckoutPanelProps = {
  // Pass in prop of Seats Chosen from BookingStore
  seatsChosen: string[];

  click: () => void;
};

export const tempSeatsData = [
  "A-1",
  "A-2",
  "A-3",
  "A-4",
  "A-5",
  "A-6",
  "B-1",
  "B-2",
  "B-3",
  "B-4",
  "B-5",
  "B-6",
  "B-7",
  "B-8",
  "C-1",
  "C-2",
  "C-3",
  "C-4",
  "C-5",
  "C-6",
  "C-7",
  "C-8",
  "D-1",
  "D-2",
  "D-3",
  "D-4",
  "D-5",
  "D-6",
  "D-7",
  "D-8",
  "E-1",
  "E-2",
  "E-3",
  "E-4",
  "E-5",
  "E-6",
  "E-7",
  "E-8",
  "F-1",
  "F-2",
  "F-3",
  "F-4",
  "F-5",
  "F-6",
];

const pricesCategory: Record<string, number> = {
  front: 12.95,
  middle: 14.95,
  back: 16.95,
};

// tempSeatsData will be seatsChosen
export function CheckoutPanel({ tempSeatsData, click }: CheckoutPanelProps) {
  // For Button at the bottom to navigate to ticket
  const navigate = useNavigate();
  // Creates state of quantities, sets initial values for each section of seats
  const [quantities, setQuantities] = useState({
    front: 0,
    middle: 0,
    back: 0,
  });

  // Call a function when state (here setQuantities) changes
  useEffect(() => {
    const frontRowSeats = tempSeatsData.filter(
      (seat) => seat.startsWith("A") || seat.startsWith("B")
    );
    const backRowSeats = tempSeatsData.filter(
      (seat) => seat.startsWith("E") || seat.startsWith("F")
    );
    setQuantities({
      front: frontRowSeats.length,
      back: backRowSeats.length,
      middle: tempSeatsData.length - frontRowSeats.length - backRowSeats.length,
    });
  }, [tempSeatsData]);

  useEffect(() => {
    console.log(quantities);
  }, [quantities]);

  /* const totalAmount =  */

  /*   const buttonOptions = Object.keys(genres);


  const meta: Meta<typeof GenreButton> = {
    title: "Movie/GenreButton",
    component: GenreButton,
    argTypes: {
      genre: {
        options: buttonOptions,
        control: { type: "radio" },
      },
    },
  };
  export default meta; */

  return (
    <Transition
      /* show={seatsChosen.length > 0} */
      show={true}
      className="bg-dark-light rounded-3xl pt-7 px-5 pb-6 "
      enter="transition transform translate-y duration-75"
      enterFrom="translate-y-60"
    >
      <div>
        {/* wrapper for quantity and category */}
        <div className="">
          {/* when front seats quantities greater than 0, retruns div */}
          {quantities.front > 0 && (
            <div className="flex justify-between py-2">
              <div className="flex  gap-x-6">
                <p className="text-description text-white-dimmed">
                  {quantities.front}x
                </p>
                <p className="text-description text-white">Seat - Front</p>
              </div>
              <div className="flex gap-x-1">
                {/* interacting with state and price Category Object */}
                <p className="text-description text-white">
                  ${quantities.front * pricesCategory.front}
                </p>
                <p className="text-description text-white-dimmed">/ each</p>
              </div>
            </div>
          )}

          {quantities.middle > 0 && (
            <div className="flex justify-between py-2">
              <div className="flex  gap-x-6">
                <p className="text-description text-white-dimmed">
                  {quantities.middle}x
                </p>
                <p className="text-description text-white">Seat - Middle</p>
              </div>
              <div className="flex gap-x-1">
                <p className="text-description text-white">
                  ${quantities.middle * pricesCategory.middle}
                </p>
                <p className="text-description text-white-dimmed">/ each</p>
              </div>
            </div>
          )}

          {quantities.back > 0 && (
            <div className="flex justify-between py-2">
              <div className="flex  gap-x-6">
                <p className="text-description text-white-dimmed">
                  {quantities.back}x
                </p>
                <p className="text-description text-white">Seat - Back</p>
              </div>
              <div className="flex gap-x-1">
                <p className="text-description text-white">
                  ${quantities.back * pricesCategory.back}
                </p>
                <p className="text-description text-white-dimmed">/ each</p>
              </div>
            </div>
          )}
        </div>

        <div className="pt-2">
          <div className="bg-white-dimmed-heavy h-[1px]"></div>
          {/* wrapper for whole of the bottom half */}
          <div className="flex mt-8 space-x-12">
            {/* wrapper containing the total */}
            <div className="flex-col space-y-[3px]">
              <p className="text-description">Total Price</p>
              <p className="font-bold text-[20px] text-white">
                $
                {quantities.front * pricesCategory.front +
                  quantities.middle * pricesCategory.middle +
                  quantities.back * pricesCategory.back}
              </p>
            </div>
            <Button
              variant="primary"
              height="default"
              label={"Book Tickets"}
              onClick={() => {
                () => navigate(`ticket`);
              }}
            />
          </div>
        </div>
      </div>
    </Transition>
  );
}
