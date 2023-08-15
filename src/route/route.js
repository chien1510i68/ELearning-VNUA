import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Test from "../pages/Test";
import DefaultLayout from "../layout/DefaultLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "test", element: <Test /> },
      { path: "", element: <Home /> },
    ],
  },
]);
export default routes;
