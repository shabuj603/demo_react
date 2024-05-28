import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const UseEffectExample=()=>{
    const[count, setCount]= useState(0);
    const[todos, setTodos]= useState(null);
    const[isLoding,setisLoding]=useState(true);
    const[error, setError]= useState(false);


useEffect(()=>{
    setTimeout(()=>{
        setCount((count)=>count+1)
    },1000)
},[])

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response)=>{
            if(!response.ok){throw Error("Fatching datd not successfull")}
            else{
                return response.json()
            }        
    })
  
    .then((data)=>{
        setTodos(data);    
        setisLoding(false);
        setError(false)
    })
    .catch((error)=>{
        setError(error)
        setisLoding(false);


    })
},[])

const loadingMassage ="to do is loding...";
const todosElement = todos && todos.map((todo)=>{
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