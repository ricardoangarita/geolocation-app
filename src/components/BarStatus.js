import React, { useEffect, useState } from 'react';

//components
import Logout from './Logout';
const BarStatus = () => {
const [loggedUser, setloggedUser] = useState({})

  useEffect(() => {
    isAuthorized()
  },[])

  const isAuthorized = () =>{

    if(localStorage.getItem('user') !== null)
    {      
      const loggedUser = JSON.parse(localStorage.getItem('user'))
      setloggedUser(loggedUser)
    }
  }
    return (
    <div className="bar-status">
      <div className="logged-user">Welcome {loggedUser.name} ({loggedUser.email}) 
      <img className="button-location" alt="" />
      </div>
      <Logout />
    </div>
  );
};

export default BarStatus;
