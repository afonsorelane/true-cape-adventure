import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, ContactPage, ToursPage, AboutPage, VehiclePage, CommentsPage, EnquiryPage } from "./pages";

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
  },
            {
    path: "/comments",
    element: <CommentsPage />,
  },
              {
    path: "/enquiry",
    element: <EnquiryPage />,
  }
]);


export function Routes() {
  return <RouterProvider router={router} />;
}
