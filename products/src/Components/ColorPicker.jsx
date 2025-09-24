import React,{useState} from "react";

export default function ColorPciker(){

    const [color,setColor] = useState("red")

    const changeColor =(e) =>{
        setColor(e.target.value)
    }


    return(
        <div style={{fontFamily:"sans-serif",padding:"1rem"}}>
            <h1>Color Picker</h1>
            <input type="text" value={color} onChange={changeColor} placeholder="Enter the color..,"
             style={{marginBottom:"1rem",padding:"0.5rem",borderRadius:"0.3rem"}}
            />

            <p>Color:{color}</p>
        

        <div style={{
            width:"150px" ,  
            height:"150px",
            border:"1px solid #ccc" ,
            backgroundColor: color || "lightgray"}}>
        </div>

    </div>

        )

}