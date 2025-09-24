import React from 'react';
function ProductCard(props){
  //destructuring props
  const {id, name, description, price} = props;
   return (
    <>
    <p>Id:{id}</p>
    <p>Name:{name}</p>
    <p>Desc:{description}</p>
    <p>Price:{price}</p>
    </>
  )
}
export default ProductCard;

