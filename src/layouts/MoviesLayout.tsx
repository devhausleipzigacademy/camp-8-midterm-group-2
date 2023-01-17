import { Outlet } from "react-router-dom";

export function MovieLayout() {
  return (
    <div className="bg-dark px-5 pt-8 pb-6 h-screen text-white">
      <header>chevronBack</header>
      <Outlet />
    </div>
  );
}
