import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import {
  HomeIcon,
  FilmIcon,
  QueueListIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export default function NavBarLayout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Outlet />
      <nav className="flex bg-dark items-center justify-evenly text-dark-light h-20 py-5">
        <NavLink
          to="/"
          className={({ isActive }) => clsx(isActive && "text-white")}
        >
          <HomeIcon className="w-5 h-5"></HomeIcon>
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => clsx(isActive && "text-white")}
        >
          <FilmIcon className="w-5 h-5"></FilmIcon>
        </NavLink>
        <NavLink
          to="/queue"
          className={({ isActive }) => clsx(isActive && "text-white")}
        >
          <QueueListIcon className="w-5 h-5" />
        </NavLink>
        <NavLink
          to="/user"
          className={({ isActive }) => clsx(isActive && "text-white")}
        >
          <UserIcon className="w-5 h-5" />
        </NavLink>
      </nav>
    </div>
  );
}
