import React from "react";
import { useState } from "react";

export  const  OrderContext = React.createContext(null)


  export const OrderContextProvider= (props)=>
 {
         const [cart, setCart]=useState([])
    return (
        <>
        <OrderContext.Provider value={{cart, setCart}}>
            {props.children}
        </OrderContext.Provider>
        
        </>
    )
 }


