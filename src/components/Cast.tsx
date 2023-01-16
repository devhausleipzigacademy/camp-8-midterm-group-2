import axios from "axios";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

export function Cast() {
  return <div>hi</div>;
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
