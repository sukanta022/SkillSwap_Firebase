import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layout/HomeLayouts";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    children: [
      {
        index: true,
        Component: Home
      }
    ]
  },
]);