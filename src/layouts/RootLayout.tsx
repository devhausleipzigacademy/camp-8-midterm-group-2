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
  {
    name: "User",
    path: "/user",
  },
  {
    name: "Queue",
    path: "/queue",
  },
];

export function RootLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
