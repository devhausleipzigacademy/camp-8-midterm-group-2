import { Outlet } from "react-router-dom";
import { useAuthStore } from "../stores/AuthStore";

export function BookingLayout(): JSX.Element {

  const { token, clear } = useAuthStore();
  if (!token) return <Navigate to="/login" replace />;

  return (
    <div>
      <Outlet />
    </div>
  );
}
