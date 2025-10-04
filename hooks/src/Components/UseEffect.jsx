import React, {useState, useEffect} from 'react';


function UseEffect(){
    //Run on every render

    const[count , setCount]  = useState(0);
  
    useEffect(() =>{
        console.log("useEffect Called");
       
    })

    return(
        <>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        
        </>
    )

}
export default UseEffect;