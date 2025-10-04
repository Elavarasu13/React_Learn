import React,{useState,useEffect} from 'react';
function UseEffect3(){
    const[count , setCount] = useState(0);
    const[name , setName] = useState("");

    useEffect(() =>{
        console.log("COUNT CHANGED:",name);

    },[name]) // runs when count changes //with depecndency array

    return(
        <>

        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        <h1>Name : {name}</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name"/>
        </>
        )
        }
     export default UseEffect3;