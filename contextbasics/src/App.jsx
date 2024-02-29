import  Component1 from './component/componen1'
import './App.css'
import React, { useState } from 'react';
import UserInfo from './component/userinfo';
import UserContext from './context/usercontext';
import UserInfo2 from './component/userinfo2';
import ThemeProvider from './context/theme'

function App() {


  const [user, setUser] = useState({
    name: 'John Doe',
    age: 30,
    isLoggedIn: true,
  });
  return (
    <>
         <ThemeProvider>

       <Component1/>
       <UserContext.Provider value={{user , setUser}}>
      <div>
        <UserInfo />
        <UserInfo2/>
      </div>
    </UserContext.Provider>
         </ThemeProvider>
    </>
  )
}

export default App
