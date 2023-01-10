import { NavLink, Outlet } from "react-router-dom";

export function NavBar() {
  return (
    <div>
      <Outlet />
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/#"></NavLink>
        <NavLink to="/#"></NavLink>
      </nav>
    </div>
  );
}