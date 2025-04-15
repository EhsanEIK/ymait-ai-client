import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import PC from "../components/PC/PC";
import Monitor from "../components/Monitor/Monitor";
import UPS from "../components/UPS/UPS";
import AddPC from "../components/PC/AddPC";
import AddMonitor from "../components/Monitor/AddMonitor";
import AddUPS from "../components/UPS/AddUPS";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/pcInfo',
                element: <PC></PC>,
                loader: () => fetch('https://ymait-ai-server.vercel.app/pcInfo')
            },
            {
                path: '/addPCInfo',
                element: <AddPC></AddPC>
            },
            {
                path: '/monitorInfo',
                element: <Monitor></Monitor>,
                loader: () => fetch('https://ymait-ai-server.vercel.app/monitorInfo')
            },
            {
                path: '/addMonitorInfo',
                element: <AddMonitor></AddMonitor>
            },
            {
                path: '/upsInfo',
                element: <UPS></UPS>,
                loader: () => fetch('https://ymait-ai-server.vercel.app/upsInfo')
            },
            {
                path: '/addUPSInfo',
                element: <AddUPS></AddUPS>
            },
        ]
    },
])