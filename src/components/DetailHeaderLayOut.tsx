import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useLocation, useNavigate } from "react-router-dom";

type props = {
  state: string;
};

export function DetailHeader(props: string) {
  let location = useLocation();
  let navigate = useNavigate();

  console.log(location);
  return (
    <header className="flex items-start">
      {/* Will this not lead us back to crew if we go to movie details? */}
      <div className="h-6" onClick={() => navigate(-1)}>
        <ChevronLeftIcon className="h-6 fill-black" />
      </div>
      <h1 className="text-title text-white">{location.state}</h1>
    </header>
  );
}
