import { Outlet } from "react-router-dom";
import { DetailHeader } from "../components/DetailHeaderLayout";

export function MovieLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
