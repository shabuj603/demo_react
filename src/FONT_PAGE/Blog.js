import React, { useEffect, useState } from "react";

import { blogsData } from "./BLOG_PAGE/data";
import { useParams, useLocation } from "react-router-dom";
const Blog =()=>{
    const {title} = useParams()
    const location = useLocation();

    // const[bodyData, setBodyData]= useState("");
    
    // useEffect(()=>{
    //  const blogData = blogsData.filter((blog)=>blog.title === title);
    //     setBodyData(blogData[0].body); 
    // },[])
   
    return(
        <div>
            <h3>{location.state.title}</h3>
            <p>{location.state.body}</p>
        </div>
    )
}
export default Blog;