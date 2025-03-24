import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import PC from "../components/PC/PC";
import Monitor from "../components/Monitor/Monitor";
import UPS from "../components/UPS/UPS";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/pcInfo',
        element: <PC></PC>
    },
    {
        path: '/monitorInfo',
        element: <Monitor></Monitor>
    },
    {
        path: '/upsInfo',
        element: <UPS></UPS>
    },
])