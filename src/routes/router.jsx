import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import PC from "../components/PC/PC";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/pcInfo',
        element: <PC></PC>
    }
])