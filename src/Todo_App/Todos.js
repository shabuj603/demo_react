import React from "react";
import Todo3 from "./Todo3";

const Todos =(props)=>{
    return(
        <div>
          <section>
               {props.todo.map((todo=><Todo3 todo={todo.todo} key={todo.id} id={props.id}/>))}
          </section>
        </div>
    )
}
export default Todos;