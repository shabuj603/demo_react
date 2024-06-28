import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Contract =()=>{
    const navigate = useNavigate();
    return(
        <div>
            Contract;
            <Button onClick={()=>{
                navigate("/")
            }}>Go back home</Button>
        </div>
    )
}
export default Contract;