import { MovieDetail } from "../types/api";
import axios from "axios";
import { Credits } from "../types/api";

// export async function loadMovieDetails({
//   params,
// }: MovieDetail): Promise<string> {
//   return params.movieId;
// }

axios
  .get<Credits>(
    "https://api.themoviedb.org/3/movie/22/credits?api_key=039ceb136bde381a9652fedddb79e1f1"
  )
  .then((res) => {
    console.log(res.data);
    console.log(res.data.crew);
    console.log(res.data.cast);
  })
  .catch((error) => {
    console.error("Couldn't reach the API");
  });

export async function printMovies(): Promise<MovieDetail> {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie?api_key=039ceb136bde381a9652fedddb79e1f1"
    );
    console.log(res.data);
  } catch (error) {
    console.error("Couldn't reach the API");
  }
}

// axios
//   .get<UpcomingMovies>(
//     "https://api.themoviedb.org/3/movie/upcoming?api_key=039ceb136bde381a9652fedddb79e1f1"
//   )
//   .then((res) => {
//     console.log(res.data.page);
//     console.log(res.data.results);
//     console.log(res.data.total_pages);
//     console.log(res.data.total_results);
//     console.log(res.data.results[1]);
//   })
//   .catch((error) => {
//     console.error("Couldn't reach the API");
//   });
