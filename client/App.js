/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import Login from './containers/login';
import SignUp from './containers/signup';
import './styles.scss'




const UserContext = createContext([{}, () => {}]);

const App = () => {

  const [userId, setUserId] = useState(null);

  return (
    
    <div className='appContainer'>
      <div>
      <UserContext.Provider value={[userId, setUserId]}>
        <Routes>
            <Route index element = {<MainContainer />} />
            <Route path="/" element={<MainContainer />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
        </UserContext.Provider>
      </div>
      
    </div>
  );
};

export { App, UserContext } ;
