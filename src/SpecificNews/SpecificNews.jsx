import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Shared/Header";
import RightSIdebar from "../SideBar/RightSIdebar";



const SpecificNews = () => {
    const {id}=useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
       <div className="grid md:grid-cols-4">
        <div className="col-span-3"><h3>this is News Details of :{id}</h3></div>
     
       <div>
        <RightSIdebar></RightSIdebar>
       </div>
       </div>

        </div>
    );
};

export default SpecificNews;