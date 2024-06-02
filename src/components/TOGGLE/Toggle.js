import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { fatchData } from './data';
import Faqs from "./Faqs";

const Toggle=()=>{
 
    const[faqs,setFaq]=useState(fatchData)

    return(

        <div>
            {faqs.map((faq)=> <Faqs key={faq.id} {...faq}/>)}         
          
        </div>
    )
}
export default Toggle;