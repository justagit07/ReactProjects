import React from "react";
import  {ThemeContext} from '../context/theme'
import { useContext } from "react";


export default function Componen1() {
    let {theme, setTheme}= useContext(ThemeContext)
    const handletheme= ()=>
    {
      setTheme((e)=>{
        if(e== 'light')
        {
          return 'dark'
        }
        return 'light'
      })
    }
    
    console.log('this is my context form the usecontext return type', theme)
  return (
    <div>
      <h1>hey this is my theme color {theme}</h1>
      <button onClick={handletheme}>click to change thme</button>
    </div>
  )
}
