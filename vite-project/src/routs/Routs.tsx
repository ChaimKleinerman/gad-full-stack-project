import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "../components/Home";
import Categories from "../components/Categories";
import Product from "../components/Product";
import Cart from "../components/Cart";
import StatusLogsAndCart from "../components/StatusLogsAndCart";
import Categories5 from "../components/homePage/Categories5";
import CategoriesLinks from "../components/homePage/CategoriesLinks";
import ShoppingCart from "../components/ShoppingCart";
import Prod5 from "../components/homePage/Prod5";
export default function Routs() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <StatusLogsAndCart />
                    <CategoriesLinks />
                    <Categories5 />
                    <Prod5 />
                </>
            ),
            errorElement: <ErrorPage />,
        },
        {
            path: "/categories/:category",
            element: (
                <>
                    <StatusLogsAndCart />
                    <Categories />
                </>
            ),
            errorElement: <ErrorPage />,
        },
        {
            path: "/product/:id",
            element: (
                <>
                    <StatusLogsAndCart />
                    <Product />
                </>
            ),
            errorElement: <ErrorPage />,
        },
        {
            path: "/cart",
            element: (
                <>
                    <StatusLogsAndCart />
                    <ShoppingCart />
                </>
            ),
            errorElement: <ErrorPage />
        }

    ]);

    return <RouterProvider router={router} />;
}
