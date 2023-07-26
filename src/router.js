import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/> ,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
