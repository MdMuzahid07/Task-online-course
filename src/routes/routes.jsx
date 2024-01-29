import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import App from "../App";
import Dashboard from "../layout/dashboard/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
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
