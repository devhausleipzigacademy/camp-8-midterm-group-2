import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { MovieLayout } from "./layouts/MoviesLayout";
import { RootLayout } from "./layouts/RootLayout";
import { NavBar } from "./layouts/NavBarLayout";
import {
  CastCrew,
  Genres,
  Home,
  loadMovieDetails,
  Login,
  MovieDetails,
  SelectSeats,
  SelectTime,
  Ticket,
} from "./routes";
import { BookingLayout } from "./routes/BookingLayout";
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
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "genres",
        element: <Genres />,
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
