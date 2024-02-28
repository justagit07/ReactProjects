import { useContext, createContext } from "react";
import { useState, useEffect } from "react";

export const Themecontext= createContext()



export const ThemeProvider=  ({children})=>
{
    const [Thememode, setThememode]= useState("light")


   const   lighttheme= ()=>{ setThememode("light")}

   const darktheme= ()=>  {setThememode("dark")}

   useEffect(  ()=>{ document.querySelector('html').classList.remove("light", "dark")
      document.querySelector('html').classList.add(Thememode) },[Thememode])
    return(
        <>
        <Themecontext.Provider value= {{ Thememode, darktheme,lighttheme}}>

        {children}
        </Themecontext.Provider>

        </>
    )
}

export default  function usetheme(){ return useContext(Themecontext)}
