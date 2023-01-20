import { Outlet } from "react-router-dom";

export function BookingLayout(): JSX.Element {
  return (
    <div className="h-full w-full pb-6">
      <Outlet />
    </div>
  );
}
