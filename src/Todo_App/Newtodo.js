import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Newtodo=(props)=>{

    const[todo,setTodo]= useState({
        title:"",
        desc:""
    })
    const{title,desc}=todo;

    const handleSubmit=(event)=>{
        event.preventDefault();
        props.allAddTodo(todo);
        setTodo({title:"", desc:""})
    }
    const handleTodo=(event)=>{
        const name= event.target.name;
        setTodo((oldTodo)=>{
            return{...oldTodo,[name]:event.target.value};
        })
    }
 

    return(
        <div>
           <h1>New to do list</h1>
           <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={title} placeholder="Enter email" onChange={handleTodo} />
                    </Form.Group>

                </Row>
                <Form.Label>desc</Form.Label>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    name="desc"
                    onChange={handleTodo}
                    value={desc}
                    />
                </FloatingLabel>
                <Button variant="primary" type="submit">Add Todo</Button>
            </Form>
        </div>
    )
}  
export default Newtodo;