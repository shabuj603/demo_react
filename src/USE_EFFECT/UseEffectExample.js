import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import DataFatch from "./DataFatch";

const UseEffectExample=()=>{
const{data,isLoding,error}=DataFatch("https://jsonplaceholder.typicode.com/todos");
const loadingMassage ="to do is loding...";
const todosElement = data && data.map((todo)=>{
    return <div key={todo.id}>{todo.title}</div>
    });
    return(
        <div>
           <h1>Todos App</h1>
           {error && <p>{error}</p>}
           {isLoding && loadingMassage}
         {todosElement}
           <Button>+</Button><Button>-</Button>
        </div>
    )
}
export default UseEffectExample;