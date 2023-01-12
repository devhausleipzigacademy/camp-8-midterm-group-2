import { CastAndCrew } from "../components/CastAndCrew";
import { Tabs } from "../components/TabsCastCrew";

export function CastCrew(): JSX.Element {
  return (
    <div className="bg-dark h-full w-screen px-5 scrollbar-hide scrollbar-hide::-webkit-scrollbar">
      <div>
        <h1 className="text-title text-center py-5">Cast & Crew</h1>
      </div>
      <div className="flex content-center justify-between mb-6">
        <Tabs type={"Selected"} label={"Cast"} {...Tabs} />
        <Tabs type={"Available"} label={"Crew"} {...Tabs} />
      </div>
      <div className="flex flex-col gap-3">
        <CastAndCrew
          image="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg"
          name="Juanito"
          character="blabla"
        />
        <CastAndCrew
          image="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg"
          name="Juanito"
          character="blabla"
        />
        <CastAndCrew
          image="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg"
          name="Juanito"
          character="blabla"
        />
        <CastAndCrew
          image="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg"
          name="Juanito"
          character="blabla"
        />
        <CastAndCrew
          image="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg"
          name="Juanito"
          character="blabla"
        />
        <CastAndCrew
          image="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg"
          name="Juanito"
          character="blabla"
        />
        <CastAndCrew
          image="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg"
          name="Juanito"
          character="blabla"
        />
        <CastAndCrew
          image="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg"
          name="Juanito"
          character="blabla"
        />
        <CastAndCrew
          image="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg"
          name="Juanito"
          character="blabla"
        />
        <CastAndCrew
          image="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg"
          name="Juanito"
          character="blabla"
        />
        <CastAndCrew
          image="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg"
          name="Juanito"
          character="blabla"
        />
      </div>
    </div>
  );
}
