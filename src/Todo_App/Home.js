import React, { useState } from "react";
import Todos from "./Todos";
import Newtodo from "./Newtodo";

const Home =()=>{
    const [todos,setTodos]=useState([]);

    const handleTodo=(todo)=>{
            setTodos((previousTodo)=>{
                return[...previousTodo,{todo}]
            }); 
    }
    return(
        <div>
            <article style={{backgroundColor:"red", width:"50%"}}>
            <Newtodo allAddTodo={handleTodo}/>
            <Todos todo={todos}  />
            </article>
        </div>
    )
}
export default Home;