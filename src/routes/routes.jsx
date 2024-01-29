import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import App from "../App";
import Dashboard from "../layout/dashboard/Dashboard";
import Courses from "../pages/Courses";
import Contact from "../pages/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [],
  },
]);

export default routes;
