import React , {useState,useEffect} from 'react';

function UseEffect2(){

    const[message , setMessage] = useState("");

    useEffect(() => {
        console.log("Component Mounted")
        setMessage("Hello User, Welcome to ReactJS")

        return(()=>{
            console.log("Component will unmounted")
        })
    })

    return(
        <>
        <h1>{message}</h1>
        </>
    )
}
export default UseEffect2;