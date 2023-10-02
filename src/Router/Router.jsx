import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/Layout/Layout";
import Register from "../Component/Register/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Register />,
      },
    ],
  },
]);

export default Router;
