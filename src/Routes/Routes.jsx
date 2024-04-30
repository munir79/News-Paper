import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Registar from "../Pages/Registar/Registar";
import SpecificNews from "../SpecificNews/SpecificNews";

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
             element:<SpecificNews></SpecificNews>
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