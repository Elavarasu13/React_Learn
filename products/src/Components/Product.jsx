import React from 'react';
import ProductsDetails from './ProductsDetails.jsx'; //dataset 1
import User from './user.jsx';  //dataset 2
import ProductCard from './ProductCard';  
function Product(){
   return (
    <div>
    <h1>Products</h1>
   {ProductsDetails.map((products) =>(
        <ProductCard key={products.id} //using key prop to uniquely identify each element
        //passing props to ProductCard component
        id={products.id}
        name={products.name} 
        description = {products.description}
        price = {products.price}/>
    ))}

    <h1>Users</h1>
    {User.map((user) => (
        <ProductCard key={user.id}
        id = {user.id}
        name={user.name}/>
    ))} 
    </div> 
    )
}
export default Product;