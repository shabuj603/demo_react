import React, { useState } from "react";
import TodoApp from "./Todo";
import Todos3 from "./Todos3";


const dumyTtodos = ["todo1", "todo2"];    
const Home=()=>{

    const[todos,setTodos]=useState(dumyTtodos);

    const handleChileData=(newTodo)=>{
        setTodos([...todos,newTodo])
    }

    return(
        <div>
        <Todos3 addTodo={handleChileData}/>
        <TodoApp todos={todos}/>
    </div>
    )
}
export default Home;