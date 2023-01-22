import { Outlet } from "react-router-dom";
import { DetailHeader } from "../components/DetailHeaderLayout";
import { useAuthStore } from "../stores/AuthStore";

export function MovieLayout() {

  const { token, clear } = useAuthStore();
  if (!token) return <Navigate to="/login" replace />;

  return (
    <div>
      <Outlet />
    </div>
  );
}
