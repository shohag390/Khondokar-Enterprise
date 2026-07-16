import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Homes from "../pages/Homes";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
import SingleServices from "../components/SingleServices";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../components/Dashboard/DashboardHome";
import MyPostedProducts from "../components/Dashboard/MyPostedProducts";
import PostPorduct from "../components/Dashboard/PostPorduct";
import Review from "../components/Dashboard/Review";
import AllProducts from "../components/Products/AllProducts";

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
        path: "/all-product",
        Component: AllProducts,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/:id",
        Component: SingleServices,
      },
      {
        path: "/contact-us",
        Component: ContactUs,
      },
      {
        path: "/login",
        Component: SignIn,
      },
      {
        path: "/register",
        Component: SignUp,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      {
        path: "myProduct",
        Component: MyPostedProducts,
      },
      {
        path: "addProduct",
        Component: PostPorduct,
      },

      {
        path: "review",
        Component: Review,
      },
    ],
  },
]);
