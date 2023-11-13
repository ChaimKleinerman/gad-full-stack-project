import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "../components/Home";
import Categories from "../components/Categories";
import Product from "../components/Product";
import Cart from "../components/Cart";

export default function Routs() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                    <Home />
            ),
            errorElement: <ErrorPage />,
        },
        {
          path:"/categories/:category",
          element:(
              <Categories/>
          ), 
          errorElement: <ErrorPage/>, 
        },
        {
            path:"/product/:id",
            element:(
                <Product/>
            ),
                errorElement: <ErrorPage/>,
        },
        {
            path:"/cart",
            element:(
                <Cart/>
            ),
            errorElement: <ErrorPage/>
        }
        
    ]);

    return <RouterProvider router={router} />;
}
