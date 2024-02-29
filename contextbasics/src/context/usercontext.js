// UserContext.js
import React, { createContext } from 'react';

// Creating a context with an object as the default value
const UserContext = createContext({
  name: 'Guest',
  age: 0,
  isLoggedIn: false,
});

console.log('this is the usercontext.js where context is defined')

export default UserContext;
