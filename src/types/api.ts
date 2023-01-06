export type UpcomingMovies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Movie = {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string | null;
  poster_path: string | null;
  release_date: string;
  popularity: number;
  genre_ids: number[];
  vote_average: number;
};

export type MovieDetail = {
  genres: {
    id: number;
    name: string;
  }[];
  runtime: number | null;
} & Omit<Movie, "genre_ids">;

export type Person = {
  id: number;
  name: string;
  popularity: number;
  profile_path: string | null;
};

export type Cast = {
  character: string;
  order: number;
} & Person;

export type Crew = {
  department: string;
  job: string;
} & Person;

export type Credits = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};
