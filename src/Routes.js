import { ErrorPage, PageNotFound } from "./pages/ErrorPages";
import Home from "./pages/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
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
]);

const CustomRouterProvider = () => (
    <RouterProvider router={router} />
);


export default CustomRouterProvider;