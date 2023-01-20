import React from "react";
import { FormEvent } from "react";
import Barcode from "react-barcode";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "./Button";

export type TicketProps = {
  title: string;
  date: string;
  time: string;
  price: string;
  seats: Array<string>;
};

export function TicketComponent({
  title,
  date,
  time,
  price,
  seats,
}: TicketProps): JSX.Element {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6">
      <div className="divide-y divide-dashed divide-white bg-dark-light h-full rounded-xl">
        <div className="">
          <img
            src="src/assets/dev/exampleMovie1.png"
            alt="Movie picture"
            className="h-40 w-full rounded-t-xl"
          />
          <div className="px-6 grid grid-cols-3 grid-rows-5">
            <h1 className="text-title text-2xl col-span-3 ">{title}</h1>

            <div className="flex flex-col gap-1">
              <p className="text-description">Date</p>
              <p className="text-title">{date}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-description">Time</p>
              <p className="text-title">{time}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-description">Price</p>
              <p className="text-title">{price}</p>
            </div>

            <div className="flex flex-col gap-1 col-span-full ">
              <p className="text-description pt-4">Seats</p>
              <p className="text-title">{seats}</p>
            </div>
          </div>
        </div>
        <div className="h-0 w-full flex justify-between">
          <div className="h-12 w-6 rounded-r-full bg-dark -translate-y-6"></div>
          <div className="h-12 w-6 rounded-l-full bg-dark -translate-y-6"></div>
        </div>
        <div className="flex justify-center">
          <Barcode
            width={1.725}
            height={36}
            displayValue={true}
            lineColor="white"
            background=""
            value="7485937485948375"
            fontSize={12}
          ></Barcode>
        </div>
      </div>
      <Button
        type={"primary"}
        height={"default"}
        label={"Back To Home"}
        onClick={() => navigate("/")}
        disabled={false}
      ></Button>
    </div>
  );
}
