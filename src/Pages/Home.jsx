
import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Shared/Header";
import Leftside from "../SideBar/Leftside";

import RightSIdebar from "../SideBar/RightSIdebar";
import Middlesidebar from "../SideBar/Middlesidebar";


const Home = () => {
  const news=useLoaderData();
  console.log(news);
    return (
      <div>
        <Header></Header>
        <div className="m-6">
        <Navbar></Navbar>
        </div>
          <div className="grid  sm:grid-cols-1 gap-1 md:grid-cols-4">
           <div ><Leftside></Leftside> </div>

           <div className="md:col-span-2 "> 
           {
            news.map(newses=><Middlesidebar newses={newses} key={newses._id}></Middlesidebar>)
           }
            </div>
           <div ><RightSIdebar></RightSIdebar></div>
        </div>
      </div>
    );
};

export default Home;