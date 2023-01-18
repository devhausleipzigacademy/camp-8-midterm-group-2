import { FormEvent } from "react";
import { Navigate } from "react-router-dom";
import Button from "./Button";

export function TicketComponent(): JSX.Element {
  return (
    <div className="flex flex-col gap-6">
      <div className="divide-y divide-dashed divide-white   bg-dark-light h-full rounded-xl">
        <div className="">
          <img
            src="src/assets/dev/exampleMovie1.png"
            alt=""
            className="h-40 w-full rounded-t-xl"
          />
          <div className="px-6">
            <h1 className="text-title text-2xl pt-2">Violent Night</h1>
            <div className="flex justify-between pt-4">
              <div className="flex flex-col gap-1">
                <p className="text-description">Date</p>
                <p className="text-title">08 Jan</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-description">Date</p>
                <p className="text-title">08 Jan</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-description">Date</p>
                <p className="text-title">08 Jan</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 pb-32">
              <p className="text-description pt-4">Seats</p>
              <p className="text-title">C-3, C-5, A-4</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="src/assets/dev/barCode.png"
            alt=""
            className="h-20 w-56 py-3"
          />
        </div>
      </div>
      <Button
        type={"primary"}
        height={"default"}
        label={"Back To Home"}
        onClick={function (event: FormEvent<any>) {
          return <Navigate to="/" replace />;
        }}
        disabled={false}
      ></Button>
    </div>
  );
}
