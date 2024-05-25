import React from "react";
import Todo2 from "./Todo2";

const TodoApp=(props)=>{
    return(
        <div>
            <h1 style={{color:"red", backgroundColor:"yellow", padding:"10px", width:"40%"}}>Home Todo second page</h1>
        {props.todos.map((todo,i)=>(
            <Todo2 key={i} todo={todo}/>
    )
    )}
        </div>
    )
}
export default TodoApp;