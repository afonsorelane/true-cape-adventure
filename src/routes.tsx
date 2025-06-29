import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, ContactPage, ToursPage, AboutPage, VehiclePage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
    {
    path: "/contact",
    element: <ContactPage />,
  },
      {
    path: "/tours",
    element: <ToursPage />,
  },
        {
    path: "/about",
    element: <AboutPage />,
  },
          {
    path: "/vehicles",
    element: <VehiclePage />,
  }
]);


export function Routes() {
  return <RouterProvider router={router} />;
}
