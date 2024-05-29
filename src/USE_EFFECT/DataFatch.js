import React, { useEffect, useState } from "react";

const DataFatch=(url)=>{
    const[count, setCount]= useState(0);
    const[data, setData]= useState(null);
    const[isLoding,setisLoding]=useState(true);
    const[error, setError]= useState(false);

useEffect(()=>{
    setTimeout(()=>{
        setCount((count)=>count+1)
    },1000)
},[])

useEffect(()=>{
    fetch(url)
    .then((response)=>{
            if(!response.ok){throw Error("Fatching datd not successfull")}
            else{
                return response.json()
            }        
    })
  
    .then((data)=>{
        setData(data);    
        setisLoding(false);
        setError(null)
    })
    .catch((error)=>{
        setError(error.message)
        setisLoding(false);
    })
},[url]);
return{data,isLoding,error}
}
export default DataFatch;