import React from "react";
import AllUser from "./AllUser";

const Users =(props)=>{
    return(
       <>{props.Users.map((user)=>{
        const newUsere = {user};
            <AllUser {...newUsere} key={user.id} />
       })}</>
    )
}
export default Users;