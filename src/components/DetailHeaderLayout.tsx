import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

type props = {
  title?: string;
  onClick?: Function;
};

export function DetailHeader({ title, onClick }: props): JSX.Element {
  const navigate = useNavigate();
  let onClickFunction;
  onClick
    ? (onClickFunction = onClick)
    : (onClickFunction = () => navigate(-1));

  return (
    <header className="pt-8 pl-4 pr-4 flex items-center justify-between">
      <div className="w-6 h-6" onClick={onClickFunction}>
        <ChevronLeftIcon className="self-center ml-1 h-6 fill-white" />
      </div>
      <h1 className="text-title">{title}</h1>
      <div className="w-6 h-6" />
    </header>
  );
}
