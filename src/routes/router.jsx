import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Homes from "../pages/Homes";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Homes,
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/contact-us",
        Component: ContactUs,
      },
    ],
  },
]);
