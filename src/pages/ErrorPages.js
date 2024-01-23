import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <main role="alert">
                <h1>An error occured</h1>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to="/">Home Page</Link>
            </main>
        </div>
    )
}

export const PageNotFound = () => (
    <>
        <main>
            <h1>An error occured</h1>
            <p>Could not find this page</p>
            <Link to="/">Home Page</Link>
        </main>
    </>
)

export const NotAllowed = () => {
    return <h2>You are not allowed to visit this page.</h2>
}