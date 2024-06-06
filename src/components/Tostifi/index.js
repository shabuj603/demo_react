import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';

const Tostifyi =()=>{

    const handleTodo=()=>{
        toast("tostifi not use");
    }
    const TodoDelete=()=>{
        toast("tostifi Delete");
    }
    return(
        <div>
            <Button onClick={handleTodo} >Click me </Button>
            <Button onClick={TodoDelete} >Delete todo</Button>
            <ToastContainer/>
        </div>
    )
}
export default Tostifyi;