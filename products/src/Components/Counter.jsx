import React,{useState} from 'react';

function Counter() {

    const [ela, setEla] = useState(0);
    //in this line count is a state variable and setCount is a function to update the state variable.

    return (
        <>
        <h1>Counter:{ela}</h1>
        <button onClick={() => setEla(ela + 1)}>Increment</button>
        <button onClick={() => setEla(ela - 1)}>Decrement</button>
        </>
    )
}
export default Counter;