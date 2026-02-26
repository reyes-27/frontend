import {
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductDetail from "../components/products/ProductDetail";
import AuthRoutes from "./AuthRoutes";
import TestingPage from "../pages/TestingPage";
const router = createBrowserRouter(
  [
    {
      path:'/',
      Component: HomePage
    },
    {
      path:'/products/:slug/',
      Component: ProductDetail
    },
    {
      path:'/testing/',
      Component: TestingPage
    },
    ...AuthRoutes
  ]
)

export default router