import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

type props = {
  title?: string;
  toAddress?: string;
};

export function DetailHeader({ title, toAddress }: props): JSX.Element {
  return (
    <header
      className="flex items-center justify-between
     bg-dark"
    >
      <Link to={`${toAddress}`}>
        <ChevronLeftIcon className="self-center h-6 fill-white" />
      </Link>

      <h1 className="text-title">{title}</h1>
      <div></div>
    </header>
  );
}
