import React, { useState } from "react";
import { Button } from "react-bootstrap";

function FunctionalHook(){

    const[brand,setBrand]=useState(0);
   const ChangeName =()=>{
    setBrand(brand + 1);
    }
    return(
        <div>
            <h1>{brand}</h1>

            <Button onClick={ChangeName}>Increment</Button>
        </div>
    )
}
export default FunctionalHook;