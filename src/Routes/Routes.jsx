import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Registar from "../Pages/Registar/Registar";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registar',
                element:<Registar></Registar>
            }
        ]
    }
]);
export default router;