import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import PC from "../components/PC/PC";
import Monitor from "../components/Monitor/Monitor";
import UPS from "../components/UPS/UPS";
import AddPC from "../components/PC/AddPC";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/pcInfo',
        element: <PC></PC>,
        loader: () => fetch('http://localhost:5000/pcData')
    },
    {
        path: '/addPC',
        element: <AddPC></AddPC>
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