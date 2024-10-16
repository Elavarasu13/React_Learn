import React from "react";
class Car extends React.Component {
    constructor(){
        super();
        this.state = {color: "Red", model: "Ford"}
    }
    render() {
        //Before using previous state
   /*  return <>
     <h1>My  Car color is {this.state.color}</h1>
     <button onClick={() => {this.setState({color: "Blue"})}}>Change Color</button>
    </>    */
    //using previous state....
    return <>
    <h1>My  Car color is {this.state.color} and Model is {this.state.model}</h1>
    <button onClick={() => {this.setState((previousState) =>{return{...previousState,color:"Blue",model:"Tata"}})}}>Change Color</button>
   </>   
    }

}
export default Car;