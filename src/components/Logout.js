import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {

  let history = useHistory()

  const getLogout = (e) => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    history.push('/')
  };
  return (
    <div>
      <input
        className="logout-button"
        type="button"
        value="Logout"
        onClick={(e) => getLogout(e)}
      />
    </div>
  );
};

export default Logout;
