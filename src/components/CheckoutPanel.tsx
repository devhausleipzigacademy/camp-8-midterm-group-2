import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

type CheckoutPanelProps = {
  totalAmount: number;
};

export function CheckoutPanel() {
  const navigate = useNavigate();

  /* const totalAmount =  */

  return (
    <div>
      <div className="bg-white-dimmed-heavy h-[1px]"></div>

      {/* wrapper for whole of the bottom half */}
      <div className="justify-between">
        {/* wrapper containing the total */}
        <div className="flex-col">
          <p className="text-description">Total Price</p>
          <p className="font-bold text-[20px] text-white">$1 Billion</p>
        </div>

        <Button
          type={"primary"}
          height={"default"}
          label={"Book Tickets"}
          onClick={() => {
            () => navigate(`ticket`);
          }}
        />
      </div>
    </div>
  );
}
