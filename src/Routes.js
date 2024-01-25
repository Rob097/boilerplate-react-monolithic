import App from "@/App";
import { PageNotFound } from "@/pages/ErrorPages";
import Home from "@/pages/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "home",
                element: <Home />,
            }
        ]
    },
    {
        path: "/home2",
        element: <Home />
    },
    {
        path: "*",
        element: <PageNotFound />
    }
]);

const CustomRouterProvider = () => (
    <RouterProvider router={router} />
);


export default CustomRouterProvider;