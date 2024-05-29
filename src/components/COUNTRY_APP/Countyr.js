import React, { useEffect, useState } from "react";
import Users from "./Users";

const CountryApp =()=>{
    const[isLoding, setIsLoding]= useState(true);
    const[error,setError]= useState(null);
    const[country, setCountry]=useState([]);
    const url = "https://jsonplaceholder.typicode.com/users";
    const fatchData = async(url)=>{
        setIsLoding(true);
      try{
        const response = await fetch(url);
        const data = response.json();
        setCountry(data);
        setIsLoding(false);
        setError(null);
      }catch(error){
        setIsLoding(false);
        setError(error);
      }


    }
    useEffect(()=>{
        fatchData(url)
    },[])
    return(
        <>
            <h1>Country App</h1>
            {isLoding && <h2>Loding...</h2>}
            {error && <h2>{error.message}</h2>}
            <article>
              
            </article>
        </>


    )
}
export default CountryApp;