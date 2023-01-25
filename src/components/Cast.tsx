import { useLoaderData, useNavigate, useParams } from "react-router-dom"; //what for Outlet
import { Cast, Crew, Credits, MovieDetail } from "../types/api";
import { baseUrl, posterUrl, SECRETKEY } from "../utils/movies2";

type CurrentData = {
  id: number;
  cast: Cast[];
  crew: Crew[];
  director: string;
  poster_path: string;
};

// create a type for crewcardprops with name job and

type CastCardProps = {
  name: string;
  character: string;
  profile_path: string;
};

function CastCard({
  name,
  character,
  profile_path,
}: CastCardProps): JSX.Element {
  return (
    <div className="flex items-center gap-5">
      <img
        src={profile_path}
        alt=""
        className="w-16 h-16 object-contain object-top"
      />
      <div className="flex flex-col gap-1">
        <div className="text-title"> {name} </div>
        <div className="text-description"> {character}</div>
      </div>
    </div>
  );
}

export function Cast(): JSX.Element {
  // const [state, setState] = useState("start");
  const navigate = useNavigate();
  const currentData = useLoaderData() as CurrentData;
  const caststuff = currentData.cast;

  return (
    <div className="text-white">
      <div className="flex flex-col gap-4">
        {caststuff.map((castmember, index) => {
          if (castmember.profile_path === null) {
            return (
              <div key={index}>
                <CastCard
                  name={castmember.name}
                  character={castmember.character}
                  profile_path={
                    "https://cdn-icons-png.flaticon.com/512/3106/3106921.png"
                  }
                />
              </div>
            );
          }
          return (
            <div key={index}>
              <CastCard
                name={castmember.name}
                character={castmember.character}
                profile_path={posterUrl + castmember.profile_path}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cast;
