import React from "react";

const Todo2=(props)=>{
    return(
        <div>
                <p key={props.i}>{props.todo}</p>
        </div>
    )
}
export default Todo2;