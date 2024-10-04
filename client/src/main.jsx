import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./view/Home/Home";
import './index.css'
import React from "react";
import Signin from "./view/Login/login";
import Signup from "./view/signup/signup";
import Error from "./component/404";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/user-login",
    element: <Signin />
  },
  {
    path: "/user-signup",
    element: <Signup />
  },
  {
    path: "*",
    element: <Error/>
  }
]);

root.render(
  <>
    <RouterProvider router={router} />
  </>
);
