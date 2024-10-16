import { useState } from "react"
function Scooter(){
   /*  const [color ,setColor] = useState("Red")
    const [brand ,setBrand] = useState("Yamaha")
    const [model ,setModel] = useState("Fascino")
    const [year  ,setYear]  = useState("2019") */
    const [scooter , setScooter] = useState({
        color: "Red",
        brand: "Yamaha",
        model: "Fascino",
        year :  "2019"
    }
);
//update color fucntion is use to update the the values 
//we mentioned only other values not changed, before thic
//function values updates other values deleted.
function updateColor() 
{
    setScooter((previousState) =>{
        return{...previousState, color: "Green",brand:"Tata"}
    })
}
//console.log('Current State' , scooter)
return<>
<h1>My Scooter</h1>
<h5>Color : {scooter.color}</h5>
<h5>Brand : {scooter.brand}</h5>
<h5>Model : {scooter.model}</h5>
<h5>Year  : {scooter.year}</h5>
<button onClick={updateColor}>updateColor</button>
</>
    /* return<>
    <h1>My Scooter</h1>
    <p>Color:{color}</p>
    <p>Brand:{brand}</p>
    <p>Model:{model}</p>
    <p>Year :{year}</p>
    </> */
}
export default Scooter;