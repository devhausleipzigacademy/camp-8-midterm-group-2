import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

type props = {
  title?: string;
};

export function DetailHeader({ title }: props): JSX.Element {
  const navigate = useNavigate();
  return (
    <header className="pt-8 pl-4 pr-4 flex items-center justify-between">
      <div className="w-6 h-6" onClick={() => navigate(-1)}>
        <ChevronLeftIcon className="self-center ml-1 h-6 fill-white" />
      </div>
      <h1 className="text-title">{title}</h1>
      <div className="w-6 h-6"/>

    </header>
  );
}
