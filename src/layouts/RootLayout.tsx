import { Outlet, NavLink } from "react-router-dom";
import clsx from "clsx";
import { useAuthStore } from "../stores/AuthStore";

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
  },
  {
    name: "MovieDetails",
    path: "/:movieid",
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

  const { token, clear } = useAuthStore();
  if (!token) return <Navigate to="/login" replace />;

  return (
    <div>
      <Outlet />
    </div>
  );
}
