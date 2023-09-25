import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Instamart = lazy(()=> import("./components/Instamart.js"))

const AppLayout =() =>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/restaurant/:resID", // dynamic id
                element: <RestaurantMenu/>
            },
            {
                path: "/instamart", 
                element: <Suspense fallback={<Shimmer/>}> <Instamart/> </Suspense>
            }
        ]
    },
    

])
 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);