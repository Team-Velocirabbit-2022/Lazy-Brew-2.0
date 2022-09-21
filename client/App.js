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
  return (
    
    <div className='appContainer'>
      <div>
        <MainContainer />
      </div>
      
    </div>
  );
};

export { App, UserContext } ;
