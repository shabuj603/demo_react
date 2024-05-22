import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';    
import InputGroup from 'react-bootstrap/InputGroup';

class ClickHandler extends Component{

    constructor(props){
        super(props)
        this.state={
            changeValue:''
        }
    }

    handleClick=()=>{
        alert("click Handle first");
    }
    handleChange =(e)=>{
        this.setState({
            changeValue:(e.target.value)
        })
    }
    render(){
        return(
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control onChange={this.handleChange}
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Button onClick={this.handleClick}>click me</Button>
                <p>{this.state.changeValue}</p>
            </div>
        )
    }
}
export default ClickHandler;