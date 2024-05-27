import React, { useState } from "react";

const Faq =({id, title, description})=>{
    const[toggle,setToggle]=useState(false);
    return(
        <div>
          <article>
            <h4>{title}</h4>
           {toggle && (
             <p>{description}</p>
           )}
            <button onClick={()=>{setToggle(!toggle)}}>{toggle ? "-":"+"}</button>
          </article>
        </div>
    )
}
export default Faq;