import React from "react";



function Child(props){
    let date = "I am from child data";
    props.onChild(date)
    return(
        <div>i ame childe </div>
    )
}
export default Child;