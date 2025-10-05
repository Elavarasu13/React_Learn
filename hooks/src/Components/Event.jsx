import React from "react";
import { useState } from "react";

function Event() {
   
    function Showmessage(event){
        event.preventDefault(); //stop reloading the page
        const message = document.createElement("p");//create a new element
        message.textContent = "form submitted successfully";
        message.style.color = "green";
        message.style.padding= "5px";
        message.style.display= "inline-block";
        // document.body.appendChild(message);

        const form =  document.getElementById("myform");
        form.insertAdjacentElement("afterend",message);

        setTimeout(() =>{
            message.remove();
            console.log("message hidden");
        },3000)
    }

return(
    <>
    <form id="myform" onSubmit={Showmessage}>
        <input type="text" placeholder="username" required/>
        <br/>
        <input type="password" placeholder="password" required/>
        <br/>
        <button type="submit">Submit</button>
    </form>
    
    </>
)
}

export default Event;