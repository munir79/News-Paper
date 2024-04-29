import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Leftside = () => {
    const [allCatagories, SetallCatagories]=useState([]);
    useEffect( ()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>SetallCatagories(data))
    },[])
    return (
        <div>
           <h3 className="text-3xl"> All Catagoreies:{allCatagories.length} </h3>
           {
            allCatagories.map(cat=> <Link className="block text-3xl px-4 m-4" key={cat.id}> {cat.name} </Link>)
           } 
        </div>
    );
};

export default Leftside;