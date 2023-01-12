import { Outlet } from "react-router-dom";

export function MovieLayout() {
  return (
    <div>
      <Outlet />
      <p>Movie layout</p>
    </div>
  );
}
