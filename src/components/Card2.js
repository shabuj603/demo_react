import React, {Component} from "react";


class Card2 extends Component{
    render(){
        return<div>
            <p>{this.props.title}</p>
            <p>{this.props.description}</p>
        </div>
    }
}

export default Card2;