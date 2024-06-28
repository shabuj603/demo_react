import React, { useState } from "react";

import { useSearchParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Traffic =()=>{

    const [searchParam, setSearchParam]= useSearchParams();
    const[name, setName]= useState("");
    const[age, setAge]= useState();


    const handleSubmit=(e)=>{
        e.preventDefault();
        setSearchParam({name:name,age:age})
    }
    return(
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>User Insert</Card.Title>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name </Form.Label>
                <Form.Control type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" />
        
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>AGE </Form.Label>
                <Form.Control type="number" onChange={(e)=>{setAge(e.target.value)}} placeholder="Enter age" />
        
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </Card.Body>
        </Card>
    </div>
    )
}
export default Traffic;