import React, { useState } from "react";
import { Button } from "react-bootstrap";

function FunctionalHook(){
// start useState
    const[brand,setBrand]=useState("Ford");
    const[count,setCount]=useState(0);


    // start function
   const ChangeName =()=>{
    setBrand((brand) => brand="tata");
    setCount((count)=> count +1);
    // setCount((count)=> count +1);
    // setCount((count)=> count +1);
 
    }
    const EvenCount =()=>{
        setCount(count -1);
        
    }
    const ResetCount=()=>{
        setCount((count) => count= 0) 
    }

    // return section
    return(
        <div>
            <h1>Car:{brand}</h1>
            <p>Count:{count}</p>

            <Button onClick={ChangeName} disabled={count ===20 ? true: false} >+</Button>
            <Button onClick={EvenCount} disabled={count ===0 ? true: false}>-</Button>
            <Button onClick={ResetCount}>0</Button>

        </div>
    )
}
export default FunctionalHook;