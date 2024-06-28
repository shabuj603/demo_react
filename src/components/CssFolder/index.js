import React, { useState } from "react";



const HandelCss =()=>{
    const[Cssstyle, setCssstyle]=useState(false);
    return(
        <div>
            <ul>
                <li style={{color: Cssstyle?"black":"pink"}}>home</li>
                <li className="">Galary</li>
                <li>About</li>
                
            </ul>

        </div>
    )
}
export default HandelCss;