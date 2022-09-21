/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer.jsx';
import Login from './login';
import SignUp from './signup';

 const Navbar = () => {
  // const navigate = useNavigate();
  // return navigate('/login')


  const handleClicklogin = () => {
    return Navigate('/login')
  }

  const handleClicksignup = () => {
    return Navigate('/signup')
  }

  return (
    <div className='navbar'>
        <nav>
            <div className='logo'>

                
                    <span className='Brand'><h1> Lazy Brew </h1></span>
                
                
                    {/*  <div className="white-key" onClick={this.handleClick1}> */}

                <img src='https://i.imgur.com/SuDASN5.png' className='logo-design'></img>

                  
                <a className='login'    href='#' onClick={() => {handleClicklogin}}> Log In</a>
                <a className='signup'    href='#' onClick={() => {handleClicksignup}}>Sign Up</a>
                 
                </div>

                
            
            {/* <img src='client/images/lazybrew.png'></img> */}
            
            
        </nav>
    </div>
  )
}

// export default Navbar