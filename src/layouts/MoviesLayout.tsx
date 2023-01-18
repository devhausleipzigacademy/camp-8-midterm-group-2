import { Outlet } from "react-router-dom";
import { DetailHeader } from "../components/DetailHeaderLayOut";

export function MovieLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
