import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import App from "../App";
import Dashboard from "../layout/dashboard/Dashboard";
import Courses from "../pages/Courses";
import Contact from "../pages/Contact";
import CourseDetails from "../pages/CourseDetails";
import Home from "../pages/dashboard/Home";
import EnrolledCourses from "../pages/dashboard/EnrolledCourses";

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
      {
        path: "/courseDetails/:CourseId",
        element: <CourseDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "enrolled",
        element: <EnrolledCourses />,
      },
    ],
  },
]);

export default routes;
