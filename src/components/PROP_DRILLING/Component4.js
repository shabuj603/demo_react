import React, { useContext } from "react";

import { UserContext } from "./UseContext";
const Component4 =()=>{
    const data = useContext(UserContext);
    console.log(data);

    return(
        <div>
        </div>
    )
}
export default Component4;