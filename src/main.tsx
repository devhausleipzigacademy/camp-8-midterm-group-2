import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { MovieLayout } from "./layouts/MoviesLayout";
import {
  CastCrew,
  Genres,
  Home,
  loadMovieDetails,
  Login,
  SelectSeats,
  SelectTime,
  Ticket,
} from "./routes";
import { BookingLayout } from "./layouts/BookingLayout";
import { Movies } from "./routes/Movies";
import { NavBarLayout } from "./layouts/NavBarLayout";
import MovieDetails from "./routes/MovieDetails";

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
    path: "booking",
    element: <BookingLayout />,
    children: [
      {
        // index ?, asking for confirmation
        index: true,
        path: "selecttime",
        element: <SelectTime />,
      },
      {
        path: "selectseats",
        element: <SelectSeats />,
      },
      {
        path: "ticket",
        element: <Ticket />,
      },
    ],
  },
];

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/",
    element: <NavBarLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "genres",
      //   element: <Genres />,
      // },
      {
        path: "movies",
        element: <Movies />,
      },
    ],
  },
  {
    path: ":movieId",
    element: <MovieLayout />,
    children: movieDetailChildren,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
