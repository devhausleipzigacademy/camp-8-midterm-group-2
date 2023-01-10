import { NavLink, Outlet } from "react-router-dom";
import { HomeIcon, FilmIcon, CircleStackIcon, UserIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { Movies } from "../routes";

type IsActive = {
  home: boolean;
  movies: boolean;
  wallet: boolean;
  account: boolean;
};

let isActive: IsActive = {
  home: true,
  movies: false,
  wallet: false,
  account: false,
};

function NavBarLayout() {
  const navigation = (
    <div className="w-[375px] h-[88px] fixed bottom-0 bg-dark px-[32px] py-[67px]">
      <Outlet />
      <nav className="flex-col gap-x-[48px]">
        <NavLink to="/"
        className="w-[24px] h-[24px]">
          <HomeIcon
            key="Home"
            className={clsx(isActive.home ? "text-white" : "text-white-dimmed")}
          />
        </NavLink>
        <NavLink to="/movies" className="w-[24px] h-[24px]">
          <FilmIcon
            key="Movies"
            className={clsx(isActive.movies ? "text-white" : "text-white-dimmed")}
          />
        </NavLink>
        <NavLink to="/#" className="w-[24px] h-[24px]">
          <CircleStackIcon
            key="Wallet"
            className={clsx(isActive.wallet ? "text-white" : "text-white-dimmed")}
          />
        </NavLink>
        <NavLink to="/#" className="w-[24px] h-[24px]">
          <UserIcon
            key="Account"
            className={clsx(isActive.account ? "text-white" : "text-white-dimmed")}
          />
        </NavLink>


      </nav>
    </div>
  );

  return navigation;
}

export default NavBarLayout;