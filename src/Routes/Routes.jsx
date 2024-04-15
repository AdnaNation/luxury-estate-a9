import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/estates.json"),
      },
      {
        path: "/estates/:id",
        element: <EstateDetails></EstateDetails>,
      },
    ],
  },
]);

export default router;
