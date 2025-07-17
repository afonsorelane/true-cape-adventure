import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomePage,
  ContactPage,
  ToursPage,
  AboutPage,
  VehiclePage,
  CommentsPage,
  EnquiryPage,
  WineTourPage,
  MineralMuseumPage,
  SafariAdventurePage,
  CapeTownCityTourPage,
  CulturalHeritageTourPage,
  PersonalizedItinerariesPage,
} from "./pages";

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
  },
  {
    path: "/winetours",
    element: <WineTourPage />,
  },
  {
    path: "/mineraltours",
    element: <MineralMuseumPage />,
  },
  {
    path: "/safaritours",
    element: <SafariAdventurePage />,
  },
  {
    path: "/capetowntours",
    element: <CapeTownCityTourPage />,
  },
  {
    path: "/culturaltours",
    element: <CulturalHeritageTourPage />,
  },
  {
    path: "/personaltours",
    element: <PersonalizedItinerariesPage />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
