
import Navbar from "../Navbar/Navbar";
import Header from "../Shared/Header";
import Leftside from "../SideBar/Leftside";
import Middlesidebar from "../SideBar/Middlesidebar";
import RightSIdebar from "../SideBar/RightSIdebar";


const Home = () => {
    return (
      <div>
        <Header></Header>
        <div className="m-6">
        <Navbar></Navbar>
        </div>
          <div className="grid  sm:grid-cols-1 gap-1 md:grid-cols-4">
           <div className="border-solid border-2 border-emerald-900"><Leftside></Leftside> </div>


           <div className="md:col-span-2 border-solid border-2 border-emerald-900"> <Middlesidebar></Middlesidebar> </div>
           <div className="border-solid border-2 border-emerald-900"><RightSIdebar></RightSIdebar></div>
        </div>
      </div>
    );
};

export default Home;