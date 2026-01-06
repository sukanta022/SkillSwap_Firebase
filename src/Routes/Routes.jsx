import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layout/HomeLayouts";
import Home from "../Pages/Home";
import SkillDetails from "../Pages/SkillDetails";
import Skills from "../Pages/Skills";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/skillDetails/:id',
        Component: SkillDetails
      },
      {
        path: 'skills',
        Component: Skills
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  },
]);