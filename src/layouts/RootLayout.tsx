import { Outlet, NavLink } from "react-router-dom";
import clsx from "clsx";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Movies",
    path: "/movies",
    children: [],
  },
  {
    name: "MovieDetails",
    path: "/movies/details",
  },
  {
    name: "CastCrew",
    path: "/castcrew",
  },
  {
    name: "SelectTime",
    path: "/selecttime",
  },
  {
    name: "SelectSeats",
    path: "/selectseats",
  },
  {
    name: "Ticket",
    path: "/ticket",
  },
  {
    name: "Genres",
    path: "/genres",
  },
];

export function RootLayout() {
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
