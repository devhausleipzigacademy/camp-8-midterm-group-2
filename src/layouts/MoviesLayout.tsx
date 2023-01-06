import { Outlet } from "react-router-dom";

export function MovieLayout() {
  return (
    <div>
      <header>chevronBack</header>
      <Outlet />
    </div>
  );
}
