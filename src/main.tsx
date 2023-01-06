import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { RootLayout } from "./layouts/RootLayout";
import { MovieDetails } from "./routes";
import { Movies } from "./routes/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/movies",
        element: <Movies />,
        // children: [
        //   {
        //     path: "/:movieid",
        //     element: <MovieDetails />,
        //   },
        // ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
