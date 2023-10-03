import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/Layout/Layout";
import Register from "../Component/Register/Register";
import Login from "../Component/Login/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default Router;
