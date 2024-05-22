import React,{Component} from 'react';
import State from './../State';
import { Button } from 'react-bootstrap';

class EventBinding extends Component{

constructor(props){
    super(props)
    this.state={
        count:0
    }
    this.increse = this.increse.bind(this)
}
 increse() {
    this.setState({
        count:this.state.count +1
    })
}

    render(){
        return(
            <div>
                <Button>{this.state.count}</Button><br></br>
                <Button onClick={this.increse}>Imcrement</Button>
            </div>
        )
    }
}
export default EventBinding;