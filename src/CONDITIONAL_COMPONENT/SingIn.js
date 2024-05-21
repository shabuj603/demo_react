import React,{ Component } from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

class SingIn extends Component{
    constructor(props){
        super(props)
        this.state={
            isLogin:false
        }
    }
    render(){
        if(this.state.isLogin){
            return(
                <HomePage/>
            )
        }else{
            return(
                <LoginPage/>
            )
        }
       
    }
}
export default SingIn;
