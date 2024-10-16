import Car from "./Sar";
import Apple from './Apple'


  function Garage()
  {
  const isDoorOpened = false;
    // const brand = 'Ferrari';
    // const color = 'black';
  const carInfo ={ carbrand: "Ferrari", carcolor:"Black" }
    // const carInfo = {};
  const appleInfo = {type:"Fuji",color:"red"}

  const carList = [
    {carbrand : "Bmw" , carcolor : "Red"},
    {carbrand : "Ford", carcolor : "Green"},
    {carbrand :"Tesla", carcolor:"Black"}
  ]
  {/*Array values without object*/}
  const numberList =[
    1,2,3,4,5
  ]
  const showCarInfo = carInfo.carbrand !== undefined && carInfo.carcolor !== undefined
     return(
      <>
      <h1>Who lives inside my garage</h1> 
      {/* <Car carbrand = {brand} carcolor ={color}/>   */}
     {/* Condition rendering */} 
      { showCarInfo && <Car carInfo = {carInfo}/> }
      <Apple appleInfo={appleInfo}/>
      {isDoorOpened ? <h2>Garage Door is Open</h2> : <h2>Garage door is close</h2>}
      <ul>
        {carList.map((carInfo)=> <li key ={carInfo.carbrand}><Car carInfo={carInfo}/></li>)}
      </ul>
      {/*Displaying array wihtout objects with index of array is key val*/}
      <ul>
        {numberList.map((e,index)=> <p key={index}>{e}</p>)}
      </ul>

      </> 
    )
  }
  export default Garage;