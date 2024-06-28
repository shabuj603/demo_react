import React, { useState } from "react";
import Component2 from "./Component2";

import { UserContext } from "./UseContext";
const Component1 =()=>{
    const[users, setUsers]=useState(
        {
            id: 101,
            name:"Khorshed writer"
        }
    );
    return(
        <div>
            <UserContext.Provider value={users}/>
            <Component2/>
            <UserContext.Provider />
        </div>
    )
}
export default Component1;