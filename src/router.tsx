import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import HappyErrorPage from "./pages/happyError";
import { getParks } from "./data/parks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <HappyErrorPage />,
    loader: getParks,
  },
]);