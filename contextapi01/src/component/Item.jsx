import React from 'react'
import { useContext } from 'react'
import {OrderContext} from '../context/Order'

 const  Item =({productname, amount}) =>{
    const {cart, setCart}= useContext(OrderContext)
    const handleclick= ()=>
    {
        setCart([...cart, {Name:productname, Price:amount},])
        console.log(cart)

    }

  return (
    <div>
       <h3>  Product: {productname}</h3>
       <h3> Price : {amount}</h3>
       <button onClick={handleclick}>Add</button>
    </div>
  )
}

export default Item