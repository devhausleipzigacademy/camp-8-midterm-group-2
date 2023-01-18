import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

type props = {
  title?: string;
};

export function DetailHeader({ title }: props): JSX.Element {
  const navigate = useNavigate();
  return (
    <header
      className="flex items-center justify-between
     bg-dark"
    >
      <div onClick={() => navigate(-1)}>
        <ChevronLeftIcon className="self-center h-6 fill-white" />
      </div>
      <h1 className="text-title">{title}</h1>
      <div className="w-6" />
    </header>
  );
}
