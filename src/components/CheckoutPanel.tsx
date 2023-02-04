import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { SeatSelectButton } from "./SeatSelectButton";
import { Transition } from "@headlessui/react";
import { useSeatStore } from "../stores/BookingStore";

export type CheckoutPanelProps = {
  // Pass in prop of Seats Chosen from BookingStore
  seatsChosen: string[];
  show: boolean;
  click: () => void;
};

const pricesCategory: Record<string, number> = {
  front: 12.95,
  middle: 14.95,
  back: 16.95,
};

export function CheckoutPanel({
  seatsChosen,
  show,
  click,
}: CheckoutPanelProps) {
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
    const frontRowSeats = seatsChosen.filter(
      (seat) => seat.startsWith("A") || seat.startsWith("B")
    );
    const backRowSeats = seatsChosen.filter(
      (seat) => seat.startsWith("E") || seat.startsWith("F")
    );
    setQuantities({
      front: frontRowSeats.length,
      back: backRowSeats.length,
      middle: seatsChosen.length - frontRowSeats.length - backRowSeats.length,
    });
  }, [seatsChosen]);

  return (
    <Transition
      show={seatsChosen.length > 0}
      // Below present just for storybook
      /* show={show} */
      className="bg-dark-light rounded-3xl pt-7 px-5 pb-6"
      enter="transition transform translate-y duration-[500ms]"
      leave="transition transform translate-x duration-[500ms]"
      enterFrom="translate-y-60"
      leaveFrom="translate-x-60"
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
                  $
                  {(
                    Math.round(quantities.front * pricesCategory.front * 100) /
                    100
                  ).toFixed(2)}
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
                  $
                  {(
                    Math.round(
                      quantities.middle * pricesCategory.middle * 100
                    ) / 100
                  ).toFixed(2)}
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
                  $
                  {(
                    Math.round(quantities.back * pricesCategory.back * 100) /
                    100
                  ).toFixed(2)}
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
                {(
                  Math.round(
                    (quantities.front * pricesCategory.front +
                      quantities.middle * pricesCategory.middle +
                      quantities.back * pricesCategory.back) *
                      100
                  ) / 100
                ).toFixed(2)}
              </p>
            </div>
            <Button
              variant="primary"
              height="default"
              label={"Book Tickets"}
              onClick={() => {
                click();
              }}
            />
          </div>
        </div>
      </div>
    </Transition>
  );
}
