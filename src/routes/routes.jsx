import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Estate.json"),
      },
      {
        path: "/estate/:id",
        element:<PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
        loader: () => fetch("/Estate.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update",
        element: <UpdateProfile></UpdateProfile>,
      },
    ],
  },
]);

export default router;
