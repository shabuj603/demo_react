import React, { useState } from "react";
import { FaqsData } from "./data";
import Faq from "./Faq";


const Faqs =()=>{
    const[faqs, setFaq]=useState(FaqsData);
    return(
        <div>
            {faqs.map((faq)=>(<Faq key={faq.id} {...faq}/>))}
            
        </div>
    )
}
export default Faqs;