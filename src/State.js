import React, {Component} from "react";
import Button from 'react-bootstrap/Button';

class State extends Component{
    constructor(props){
        super(props)
        this.state={
            count:10
        }
    }

     NumberIncrement= ()=> {
       this.setState({
        count:this.state.count +1
       })
    }

    NumberDecrement=()=>{
        this.setState({
            count: this.state.count -1,
           
        })
    }
    render(){
    const{count}=this.state;
        return(
            <div>
                <div>{count}</div>
                <Button variant="primary" size="lg" disabled={count===20?true:false}  onClick={this.NumberIncrement}>+ </Button>
                <Button variant="primary" size="lg" disabled={count===0?true:false} onClick={this.NumberDecrement}>- </Button>
            </div>
           
        )
    }
}
export default State;