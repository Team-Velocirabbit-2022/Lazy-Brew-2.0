/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useContext, useEffect, Component } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import APIFunctions from './/utils/APIFunctions.js';
import { refreshTokenSetup } from './refreshTokenSetup';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from "jwt-decode";





// All the standard imports. useNavigate is used to navigate to another node.


/**
 * ********************
 * @module Login
 * ********************
 **/

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useContext(UserContext);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // above is our state. userId is important to pass along when the user logs in. 
  // errorMessages display when the user logs in with an incorrect username or PW.
  // isSubmitted is not used at the moment, but could be used during iteration.

  // const clientID= '830039597158-6nhs6p1u8eabg6k01r5qtnam1u1fa75q.apps.googleusercontent.com';
  // const clientSecret = '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';


  function Login() {
    const onSuccess = (res) => {
      console.log('[Login Success] currentUser:', res.profileObj);

      refreshTokenSetup(res);
    }

    const onFailure = (res) => {
      console.log('[Login failed] res:', res)
    }
    

  }
  const errors = {
    uname: "Incorrect login info. Please try again.",
    pass: "invalid password"
  };

  // these errors display as text on the user's scren when username or PW is incorrect.

  const handleSubmit = async (event) => {

    // this MUST be async. Otherwise REACT will throw an error b/c components are rendering
    // that rely on state

    //Prevent page reload
    event.preventDefault();

    const { uname, pass } = document.forms[0];

    // document.forms[0] grabs the value of whatever text is in the username and PW input fields


  const userData = await APIFunctions.verifyLogin(uname.value, pass.value);
    // ^^^ here is where we make a get request to our database to see if the entered username
    // and password are stored in our database. if they are, we will return the userId


    // Compare user info
    console.log("What is userData?", userData, typeof userData);

    if (userData) {

      // console.log("I logged in correctly in LOGIN.JS!!!", userData);
      setIsSubmitted(true);
      setUserId(userData);
      return navigate('/');
    }
    else {
      // Username not found
      // the get request returns NULL if username and PW do not exist in our database.
      // this else statement catches null as a falsy value.

      setErrorMessages({ name: 'uname', message: errors.uname });
      // this will display a unique error message under username or PW.
    }
  };



  const handleClick = () => {
    console.log('Navigating to Sign Up');
    return navigate('/signup');
  };



  // Generates code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // html code for Google Login button

   // code for login form
//    const onSuccess = (res) => {
//     console.log("LOGIN SUCCESS! Current user: " , res.profileObj)
// }
// html code for Google Login button

const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res)
}



  // this is a variable containing the form and the submit/signup buttons

  const renderForm = (

    <div className="FlexDisplay">
    <div className="ContainerMainContainer">
    <div id="main_wrapper">
    <div id="allHotelsWrapper">
    <div className='hotelWrapper'>

    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname"  required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="button-container">
          <input type="submit" value="Log In"/>
        </div>
        {/* {googleLogin} */}
        <div className="button-container">
          {/* Don't have an account? */}
          <input type="button" value="Sign Up Here" onClick={() => handleClick()}/>
        </div>
      </form>
    </div>

    </div>
    </div>
    </div>
    </div>
    </div>
  );

  const googleOAuth = (
    <div className="FlexDisplay">
    <div className="ContainerMainContainer">
    <div id="main_wrapper">
    <div id="allHotelsWrapper">
    <div className='hotelWrapper'>
    
    {/*830039597158-6nhs6p1u8eabg6k01r5qtnam1u1fa75q.apps.googleusercontent.com  */}
    
    <div>
  

        <GoogleLogin
          onSuccess={credentialResponse => {
            // console.log('this is the credential string', credentialResponse.credential)
            // console.log('yes you are signed in. fucking finally');
            let token = credentialResponse.credential
            let decoded = jwt_decode(token);
            console.log(decoded)
            
            alert("You Have Successfully Logged In With Your Google Account");
            
            return navigate('/');
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
   
    </div>

    </div>
    </div>
    </div>
    </div>
    </div>

  )

  





  

  return (
      
    <div>

    <div className="login-page">
      <div className="login-form">
        <div className="title">Sign In</div>
        {renderForm}
      </div>
    </div>

        <div>
          {googleOAuth}
        </div>

    </div>
  );


};

export default Login;