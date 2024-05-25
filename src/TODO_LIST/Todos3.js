import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Todos3=(props)=>{
  const[todo,setTodo]=useState();
  const handleInputChange=(e)=>{
    setTodo(e.target.value);
  }
  const handleSubmit=(event)=>{ 
    event.preventDefault();
    props.addTodo(todo)

  }
      return (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Add Todo</Form.Label>
            <Form.Control type="text" onChange={handleInputChange} placeholder="Enter email" />         
          </Form.Group>
       
          <Button variant="primary" type="submit">
            Add todo
          </Button>
        </Form>
      );
    }
export default Todos3;