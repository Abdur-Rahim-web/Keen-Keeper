import { createBrowserRouter, Link } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";
import FriendDetails from "../pages/FriendDetails";
import CallCard from "../ui/CallCard";



export const router = createBrowserRouter([
    {
        path:'/',
        Component: RootLayout,
        children:[
            {
                index:true,
                Component: Home
            },
            {
                path:'/friends/:id',
                Component: FriendDetails
            },
            {
                path:'/timeline',
                Component: Timeline
            },
            {
                path:'/calls',
                Component: CallCard
            },
            {
                path:'/stats',
                Component: Stats
            },
            
        ],
        errorElement:<div className="text-center p-20 space-y-3">
            <h1 className="text-2xl text-blue-500 font-bold">404 - Page Not Found</h1>
            <p className="text-gray-500 ">The page you are looking for does not exist.</p>
            <Link to="/" className="btn btn-info">Go Back Home</Link>
          </div>
    },
    
])