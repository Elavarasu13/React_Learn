function Car(props) {
    const { carInfo } = props
     const { carbrand , carcolor } = carInfo 
       // destructuring props to get what we need
    const text = `Hi,Im a ${carbrand} ${carcolor} car`;  //Template string
    return(
      <h2>{text}</h2>
    )
  }
  export default Car;