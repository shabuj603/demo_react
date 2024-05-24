import React from "react";

const NewTodo = (props) =>{
props.handleNewtodo({title:"New todo component"})
    return(
        <div>
            <h1>New to list show here!</h1>
        </div>
    )
}
export default NewTodo;