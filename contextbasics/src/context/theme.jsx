import {createContext} from "react";
import { useState } from "react";
 export const ThemeContext= createContext("light")

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
  
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }
  

export default ThemeProvider