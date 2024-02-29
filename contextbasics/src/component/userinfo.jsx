// UserInfo.js
import React, { useContext } from 'react';
import UserContext from '../context/usercontext';

function UserInfo() {
  const {user, setUser} = useContext(UserContext);

  console.log('this is the user',user)

  console.log('Rendering UserInfo.js  the component file which is using the provider');
     const handleclick= ()=>
     {
        setUser((user)=> ({...user , age: user.age +1}))
     }
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Is Logged In: {user.isLoggedIn ? 'Yes' : 'No'}</p>
      <button onClick={handleclick}> hey this is the button 
      </button>
    </div>
  );
}

export default UserInfo;
