import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import PC from "../components/PC/PC";
import Monitor from "../components/Monitor/Monitor";
import UPS from "../components/UPS/UPS";
import AddPC from "../components/PC/AddPC";
import AddMonitor from "../components/Monitor/AddMonitor";
import AddUPS from "../components/UPS/AddUPS";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/pcInfo',
        element: <PC></PC>,
        loader: () => fetch('http://localhost:5000/pcInfo')
    },
    {
        path: '/addPCInfo',
        element: <AddPC></AddPC>
    },
    {
        path: '/monitorInfo',
        element: <Monitor></Monitor>,
        loader: () => fetch('http://localhost:5000/monitorInfo')
    },
    {
        path: '/addMonitorInfo',
        element: <AddMonitor></AddMonitor>
    },
    {
        path: '/upsInfo',
        element: <UPS></UPS>
    },
    {
        path: '/addUPSInfo',
        element: <AddUPS></AddUPS>,
        loader: () => fetch('http://localhost:5000/upsInfo')
    },
])