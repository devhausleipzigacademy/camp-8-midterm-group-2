import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useRouteLoaderData,
} from "react-router-dom";
import "./index.css";
import { MovieLayout } from "./layouts/MoviesLayout";
import {
  CastCrew,
  Genres,
  Home,
  loadMovieDetails,
  Login,
  MovieDetails,
  Queue,
  SelectSeats,
  SelectTime,
  selectTimeLoader,
  Ticket,
  upcomingMovieLoader,
  User,
} from "./routes";
import { BookingLayout } from "./layouts/BookingLayout";
import { Movies, MoviesLoader } from "./routes/Movies";
import NavBar from "./layouts/NavBarLayout";

const movieDetailChildren = [
  {
    index: true,
    element: <MovieDetails />,
    // loader: loadMovieDetails,
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
        index: true,
        element: <SelectTime />,
        loader: selectTimeLoader,
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
    element: <NavBar />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: upcomingMovieLoader,
      },
      // {
      //   path: "genres",
      //   element: <Genres />,
      // },
      {
        path: "movies",
        element: <Movies />,
        loader: upcomingMovieLoader,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "queue",
        element: <Queue />,
      },
    ],
  },
  {
    path: ":movieid",
    element: <MovieLayout />,
    children: movieDetailChildren,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
