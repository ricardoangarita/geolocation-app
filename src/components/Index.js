import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'

//component 
import axios from 'axios'

const Index = () => {
  const [state, setstate] = useState({
    latitude: 0,
    longitude: 0,
    email:'',
    password:'',
  });

  let history = useHistory()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setstate({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true }
    );
  },[]);

  const handleSubmit = async() => {
    try {
      const result = await axios.post('https://coding-test.rootstack.net/api/auth/login',{
        email: state.email,
        password: state.password
      })  
      localStorage.setItem('access_token', result.data.access_token)
      getUser(result.data.access_token)
   
    } catch (error) {
      console.log('index error',error)
      alert('An error has ocurred, please contact the administrator')
    }
  }

  const getUser = async (token) => {
    try {
      var result = await axios.get(
        'https://coding-test.rootstack.net/api/auth/me',
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      localStorage.setItem('user', JSON.stringify(result.data));
      
      history.push('/jobs',state)

    } catch (error) {
      console.log(error)
      alert(
        'An error has ocurred getting the logged user, please contact the administrator'
      );
    }
  };

  const handleOnChange = (e) => {
    setstate({...state, [e.target.name]: e.target.value})
  }

  return <div className="login-container">
        <img className="login-img" src="#" alt="" />
        <label className="login-label" htmlFor="email">Email:</label>
        <input className="login-textbox" type="text" name="email" id="email" onChange={e => handleOnChange(e)}/>
        <label className="login-label" htmlFor="password">Password:</label>
        <input className="login-textbox" type="password" name="password" id="password" onChange={e => handleOnChange(e)}/>
        <input className="login-button" type="button" value="Sign in now" onClick={handleSubmit} />
  </div>
};

export default Index;
