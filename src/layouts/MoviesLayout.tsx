import { Outlet } from "react-router-dom";
import { DetailHeader } from "../components/DetailHeaderLayout";

export function MovieLayout() {
  return (
    <div className="bg-dark px-5 pt-8 pb-6 text-white">
      <Outlet />
    </div>
  );
}
