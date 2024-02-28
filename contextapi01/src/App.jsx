import './App.css'
import Item from './component/Item'
import {OrderContext} from './context/Order'
import { useContext,useState } from 'react'
function App() {
  const [total, settotal]=useState()

      const {cart}= useContext(OrderContext)
    const handletotal=()=>
    {
          let a= cart.reduce((a,e)=>a+e.Price, 0)
              settotal(a)

    }
  return ( <>
      <h2> Items</h2>
      <Item productname='Macbook-Air' amount={78000}/>
      <Item productname='Redbull-Racing-Merch' amount={1500}/>
      <Item productname='Table' amount={2000}/>
      <button style={{margin:'20px'}} onClick={handletotal}>Total</button>
      <h2>Total Price:{total} </h2>

    </>
  )
}

export default App
