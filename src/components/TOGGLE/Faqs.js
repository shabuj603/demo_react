import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Styles from "./toggle.module.css"
const Faqs =(props)=>{
    const [toggle, setToggle]= useState(false);

    const handelShowHide=()=>{
        setToggle(!toggle)
    }
    return(
        <>
            <article>
                <div className={Styles.bigblue}><p style={{backgroundColor:"blue",padding:"10px", display:"inline-block"}}>{props.title}</p> <Button onClick={handelShowHide}>{toggle? "-":"+"}</Button>
                {toggle && <div>{props.describe}</div>}
                </div>
            </article>
        </>
    )
}
export default Faqs;