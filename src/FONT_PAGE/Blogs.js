import React, { useState } from "react";

import {blogsData} from "./BLOG_PAGE/data";
import { Link } from "react-router-dom";


const Blogs =()=>{
    const [blogs, setBlogs]=useState(blogsData);

    const truncateSting =(str, num)=>{
        if(str.length > num){
            return str.slice(0, num) + "...";
        }else{
            return str;
        }
    }
    return(
        
        <div>
           {blogs.map((blog=>{
            const{id,title,body}=blog;
            return <article key={id}>
                <h3>{title}</h3>
                <p>{truncateSting(body, 50)}</p>
                <Link to={title} state={{id, title, body}}>learn more..</Link>
            </article>
           }))}
        </div>
    )
}
export default Blogs;