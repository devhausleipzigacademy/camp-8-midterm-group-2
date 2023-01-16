import { Tab } from "@headlessui/react";
import { Crew } from "../components/Crew";
import clsx from "clsx";
import { useState } from "react";
import axios from "axios";
import { Credits } from "../types/api";
import { Cast } from "../components/Cast";

// export function CastCrew(): JSX.Element {
//   return (
//     <div className="bg-dark h-full w-screen px-5 scrollbar-hide scrollbar-hide::-webkit-scrollbar">
//       <div>
//         <h1 className="text-title text-center py-5">Cast & Crew</h1>
//       </div>
//       <div className="flex content-center justify-between mb-6">
//         <Tabs type={"Selected"} label={"Cast"} {...Tabs} />
//         <Tabs type={"Available"} label={"Crew"} {...Tabs} />
//       </div>
//       <div className="flex flex-col gap-3">
//         <CastAndCrew
//           image="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg"
//           name="Juanito"
//           character="blabla"
//         />
//       </div>
//     </div>
//   );
// }

export async function castLoader() {
  try {
    const response = await axios.get<Credits>(
      "https://api.themoviedb.org/3/movie/22/credits?api_key=039ceb136bde381a9652fedddb79e1f1"
    );
    return response.data;
  } catch (error) {
    throw new Error("connection Issues");
  }
}

type ButtonProps = {};

export function CastCrew(): JSX.Element {
  const [active, setActive] = useState(false);

  return (
    <div className="bg-dark h-full w-screen px-5 scrollbar-hide scrollbar-hide::-webkit-scrollbar">
      <h1 className="text-title text-center py-5">Cast & Crew</h1>
      <Tab.Group>
        <Tab.List>
          <div className="flex flex-row content-center justify-between mb-6">
            <Tab
              onClick={() => setActive(!active)}
              className={clsx(
                "text-center text-primary rounded-md w-40 h-6 ",
                active ? "bg-dark-light text-body opacity-40" : "",
                !active
                  ? " bg-white-dimmed text-body text-white border-2 border-white"
                  : ""
              )}
            >
              Cast
            </Tab>
            <Tab
              onClick={() => setActive(!active)}
              className={clsx(
                "text-center text-primary rounded-md w-40 h-6 ",
                !active ? "bg-dark-light text-body opacity-40" : "",
                active
                  ? " bg-white-dimmed text-body text-white border-2 border-white"
                  : ""
              )}
            >
              Crew
            </Tab>
          </div>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="flex flex-col gap-3">
            {""}
            <Cast />
          </Tab.Panel>
          <Tab.Panel className="flex flex-col gap-3">
            {""}
            <Crew />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
