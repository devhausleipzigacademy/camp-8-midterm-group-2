import { useLoaderData, useNavigate, useParams } from "react-router-dom"; //what for Outlet
import { Cast, Crew, Credits, MovieDetail } from "../types/api";
import { baseUrl, posterUrl, SECRETKEY } from "../utils/movies2";
import { loadCrewCast } from "../routes";

type CurrentData = {
  id: number;
  cast: Cast[];
  crew: Crew[];
  director: string;
  poster_path: string;
};

// create a type for crewcardprops with name job and

type CrewCardProps = {
  name: string;
  job: string;
  department: string;
  profile_path: string;
};

function CrewCard({
  name,
  job,
  department,
  profile_path,
}: CrewCardProps): JSX.Element {
  return (
    <div className="flex items-center gap-5">
      <img
        src={profile_path}
        alt=""
        className="w-16 h-16 object-contain object-top"
      />
      <div className="flex flex-col gap-1">
        <div className="text-title"> {name} </div>
        <div className="text-description"> {job}</div>
        <div className="text-description"> {department}</div>
      </div>
    </div>
  );
}

export function Crew(): JSX.Element {
  // const [state, setState] = useState("start");
  const navigate = useNavigate();
  const currentData = useLoaderData() as CurrentData;
  const crewstuff = currentData.crew;

  return (
    <div className="text-white">
      <div className="flex flex-col gap-4">
        {crewstuff.map((crewmember, index) => {
          if (crewmember.profile_path === null) {
            return (
              <div key={index}>
                <CrewCard
                  name={crewmember.name}
                  job={crewmember.job}
                  department={crewmember.department}
                  profile_path={
                    "https://cdn-icons-png.flaticon.com/512/3106/3106921.png"
                  }
                />
              </div>
            );
          }
          return (
            <div key={index}>
              <CrewCard
                name={crewmember.name}
                job={crewmember.job}
                department={crewmember.department}
                profile_path={posterUrl + crewmember.profile_path}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Crew;

//http://localhost:5173/315162 EXAMPLE URL TO TEST
//https://api.themoviedb.org/3/movie/315162/credits?api_key=039ceb136bde381a9652fedddb79e1f1