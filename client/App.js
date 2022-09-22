/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import Login from './containers/login.js';
import SignUp from './containers/signup.js';
import './styles.scss'




const UserContext = createContext([{}, () => {}]);

const App = () => {

  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState('');

  return (
    
    <div className='appContainer'>
      <div>
        
      <UserContext.Provider value={[userId, setUserId]}>
      <UserContext.Provider value={[userName, setUserName]}>
        <Routes>
            <Route index element = {<MainContainer />} />
            <Route path='/' element={<MainContainer />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
        </UserContext.Provider>
        </UserContext.Provider>
      </div>
      
    </div>
  );
};

export { App, UserContext } ;
