import { Outlet } from "react-router-dom";

export function BookingLayout(): JSX.Element {

  const { token, clear } = useAuthStore();
  if (!token) return <Navigate to="/login" replace />;

  return (
    <div>
      <h1>Booking</h1>
      <Outlet />
    </div>
  );
}
