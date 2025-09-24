import React,{useState} from "react";

export default function ExceedCount() {
    const [text, setText] = useState(0);

    const handleChange = (e) => {
        setText(e.target.value);
    }
  return (
    <div style={{fontFamily:"sans-serif",padding:"1rem"}}>
    <h1>Check the limit</h1>
    <input type="text" value={text} onChange={handleChange} placeholder="Type Something...."/>

    <p>Characters:{text.length}</p>
    {/* {text.length > 20 && ( <p style={{color:"red"}}>You have exceeded the limit</p>) } */}
    {text.length > 20 ? (<p style={{color:"red"}}>You have exceeded the limit</p>) : (<p style={{color:"green"}}>You are within the limit</p>)}
    </div>
  )
}