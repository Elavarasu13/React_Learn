import { useState } from "react";
function FavouriteColor() {
  // let color = 'Blue';
  const [color , setColor] = useState('Yellow')
   return <>
   <h1>My Favourite Color is {color}</h1>
   <button onClick={()=> { setColor('Red') }}>Change color</button>
   </>
}
export default FavouriteColor;