import App from "@/App";
import { Dentis, ErrorPage, Favorites, Home, Secretary } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard-dentist",
        element: <Dentis />,
      },
      {
        path: "dashboard-secretary",
        element: <Secretary />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
]);

export default router;
