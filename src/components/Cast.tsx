import axios from "axios";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { useLoaderData } from "react-router-dom";
import { Credits } from "../types/api";

await axios
  .get(
    "https://api.themoviedb.org/3/movie/22/credits?api_key=039ceb136bde381a9652fedddb79e1f1"
  )
  .then(function getCredits(res) {
    // handle success
    console.log(res);
    return res;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

export function Cast(loadCast: Credits) {
  const data = useLoaderData();
  return (
    <div>
      hi
      <div></div>
    </div>
  );
}

//   const cast = castLoader();
//   console.log(cast);
//   return (
//     <div>
//       {/* {cast.map((actor: { image: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; character: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
//         <div className="flex items-center gap-5">
//           <img src={actor.image} alt="" className="w-16 h-16" />
//           <div className="flex flex-col gap-1">
//             <div className="text-title"> {actor.name} </div>
//             <div className="text-description"> {actor.character}</div>
//           </div>
//         </div> */}
//       {/* ))} */};
//     </div>
//   );
// }
