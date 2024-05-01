import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Registar from "../Pages/Registar/Registar";
import SpecificNews from "../SpecificNews/SpecificNews";
import Private from "./Private";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/news.json')
            },
             {
             path:'/news/:id',
             element:<Private><SpecificNews></SpecificNews></Private>
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