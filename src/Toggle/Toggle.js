import React, { useState } from "react";
import { Button } from "react-bootstrap";


const Toggle=()=>{
    const[toggle, setToggle]= useState(true);

    return(
        <div>
            {toggle &&(
                <p>Hi this is khorshed alam , i am a softar ingenior, now i am working in an it firm in Dhaka, But i want to become a firm owner i always tray to develop my skill. </p>
            )}
            
            <Button onClick={()=>{setToggle(!toggle)}}>{toggle ? "Hide":"Show"}</Button>
        </div>
    )
}
export default Toggle;