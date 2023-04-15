import { createBrowserRouter } from "react-router-dom";
import { Login } from "../../pages/login/Login";
import { App } from "../../pages/app/App";

export const routes = createBrowserRouter([
    {
        path: '',
        element: <Login/>
    },
    {
        path: 'app',
        element: <App/>
    }
])