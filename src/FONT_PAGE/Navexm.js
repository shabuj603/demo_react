import React from "react";
import { Link } from "react-router-dom";

const Navlink2 =()=>{
    return(
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>login</Link>
            <Link to={"/signup"}>signup</Link>
            <Link to={"/contract"}>contrat</Link>
            <Link to={"/blogs"}>Blogs</Link>


        </nav>
    )
}
export default Navlink2;