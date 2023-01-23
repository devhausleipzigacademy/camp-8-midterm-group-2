import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { SeatSelectButton } from "./SeatSelectButton";
import { Transition } from "@headlessui/react";
import { useSeatStore } from "../stores/BookingStore";

export type CheckoutPanelProps = {
  seatsChosen: [];
  /*   totalAmount: number;
  click: () => void; */
};

export function CheckoutPanel({ seatsChosen }: CheckoutPanelProps) {
  const navigate = useNavigate();
  /*   const { seatsChosen } = useSeatStore(); */

  console.log(seatsChosen);

  

  /* const totalAmount =  */

  return (
    <div>
      <div className="bg-dark-light rounded-3xl pt-7">
        {/* wrapper within background */}
        <div className="px-5 pb-6 ">
          {/* wrapper for quantity and category */}
          <div className="">
            <div className="flex justify-between py-2">
              <div className="flex  gap-x-6">
                <p className="text-description text-white-dimmed">1x</p>
                <p className="text-description text-white">Seat - Front</p>
              </div>
              <div className="flex gap-x-1">
                <p className="text-description text-white">$12.95</p>
                <p className="text-description text-white-dimmed">/ each</p>
              </div>
            </div>

            <div className="flex justify-between py-2">
              <div className="flex  gap-x-6">
                <p className="text-description text-white-dimmed">2x</p>
                <p className="text-description text-white">Seat - Middle</p>
              </div>
              <div className="flex gap-x-1">
                <p className="text-description text-white">$14.95</p>
                <p className="text-description text-white-dimmed">/ each</p>
              </div>
            </div>

            <div className="flex justify-between py-2">
              <div className="flex  gap-x-6">
                <p className="text-description text-white-dimmed">2x</p>
                <p className="text-description text-white">Seat - Back</p>
              </div>
              <div className="flex gap-x-1">
                <p className="text-description text-white">$16.95</p>
                <p className="text-description text-white-dimmed">/ each</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <div className="bg-white-dimmed-heavy h-[1px]"></div>
            {/* wrapper for whole of the bottom half */}
            <div className="flex mt-8 space-x-12">
              {/* wrapper containing the total */}
              <div className="flex-col space-y-[3px]">
                <p className="text-description">Total Price</p>
                <p className="font-bold text-[20px] text-white">$43.55</p>
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
      </div>
    </div>
  );
}
