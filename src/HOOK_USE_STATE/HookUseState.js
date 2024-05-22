import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class HookUseState extends Component{

    constructor(props){
        super(props)
        this.state={
            count:2
        }
    }
    IncrementNumber=()=>{
        this.setState({
            count:this.state.count +1
        })
    }

    render(){
        const {count} =this.state;
        return(
            <div>
                <h1>Hook Component</h1>

                <p>Count:{count}</p>
                <Button onClick={this.IncrementNumber}>+</Button>
            </div>
        )
    }
}
export default HookUseState;