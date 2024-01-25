import App from "@/App";
import { PageNotFound, NotAllowed } from "@/pages/ErrorPages";
import Home from "@/pages/home";
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const ProtectedRoute = ({
    isAllowed,
    customRedirect,
    defaultRedirect = '/not-allowed',
    children,
}) => {
    if (!isAllowed) {
        return <Navigate to={customRedirect || defaultRedirect} replace />;
    }

    return children ? children : <Outlet />;
};

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
        element: <ProtectedRoute isAllowed={false}><Home /></ProtectedRoute>
    },
    {
        path: "/not-allowed",
        element: <NotAllowed />
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