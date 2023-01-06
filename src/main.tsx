import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { MovieLayout } from "./layouts/MoviesLayout";
import { RootLayout } from "./layouts/RootLayout";
import {
  CastCrew,
  Home,
  loadMovieDetails,
  MovieDetails,
  SelectTime,
} from "./routes";
import { Movies } from "./routes/Movies";

const movieDetailChildren = [
  {
    index: true,
    element: <MovieDetails />,
    loader: loadMovieDetails,
  },
  {
    path: "castcrew",
    element: <CastCrew />,
  },
  {
    path: "selecttime",
    element: <SelectTime />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        children: [
          {
            index: true,
            element: <Movies />,
          },
          {
            path: ":movieId",
            element: <MovieLayout />,
            children: movieDetailChildren,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
