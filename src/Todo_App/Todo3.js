import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaTrashAlt } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';

const Todo3 =(props)=>{
    const {id, name, desc}=props.todo

    const handleDelete=(id)=>{
     alert(id);
    }
    return (
        <Card style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{desc}</Card.Subtitle>
            <Button variant="primary"><FaTrashAlt onClick={handleDelete}/></Button>
          </Card.Body>
        </Card>
      );
    }

export default Todo3;