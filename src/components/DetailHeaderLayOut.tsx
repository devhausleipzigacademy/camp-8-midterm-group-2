import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

type props = {
  title?: string;
};

export function DetailHeader({ title }: props): JSX.Element {
  const navigate = useNavigate();
  return (
    <header
      className="w-full absolute top-8 mx-4 flex"
    >
      <div onClick={() => navigate(-1)}>
        <ChevronLeftIcon className="h-6 fill-white" />
      </div>
      <h1 className="text-title absolute inset-y-1/2">{title}</h1>
      <div />
      <div className="flex-1"/>
    </header>
  );
}
