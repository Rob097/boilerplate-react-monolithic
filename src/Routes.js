import { ErrorPage, PageNotFound } from "@/pages/ErrorPages";
import Home from "@/pages/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "@/App";
import PageLayout from "@/layouts/PageLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout />,
        errorElement: <ErrorPage />,
        children: [
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
                path: "*",
                element: <PageNotFound />
            }
        ]
    }
]);

const CustomRouterProvider = () => (
    <RouterProvider router={router} />
);


export default CustomRouterProvider;