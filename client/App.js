import React, { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
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

export default App;
//asdflk