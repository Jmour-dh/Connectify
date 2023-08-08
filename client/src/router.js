import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { lazy } from "react";

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { rootLoader } from './loaders/rootLoader';


const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Signin = lazy(() => import("./pages/Signin/Signin"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    errorElement: <ErrorPage />,
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
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: '/contact',
        element: (
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
