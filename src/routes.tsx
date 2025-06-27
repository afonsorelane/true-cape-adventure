import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, ContactPage, ToursPage, AboutPage } from "./pages";

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
  }
]);


export function Routes() {
  return <RouterProvider router={router} />;
}
