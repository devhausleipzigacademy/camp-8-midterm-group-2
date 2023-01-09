import { Outlet } from "react-router-dom";

export function BookingLayout(): JSX.Element {
  return (
    <div>
      <h1>Booking</h1>
      <Outlet />
    </div>
  );
}
