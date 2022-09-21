
import React, { useState, useContext, useEffect, Component } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {UserContext} from '../App';
import { GoogleLogin } from 'react-google-login';
/* eslint-disable @typescript-eslint/no-unused-vars */


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
    
    //client id credentials, maybe not a good idea to place them here.
    const clientId= '830039597158-6nhs6p1u8eabg6k01r5qtnam1u1fa75q.apps.googleusercontent.com';
    const clientSecret = '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';
    
    
  const errors = {
    uname: "invalid username",
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


    // const userData = await ...
    // ^^^ here is where we make a get request to our database to see if the entered username
    // and password are stored in our database. if they are, we will return the userId


    // Compare user info
    if (userData) {

      console.log(userData);
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

  // code for login form
        const onSuccess = (res) => {
            console.log("LOGIN SUCCESS! Current user: " , res.profileObj)
        }

        const onFailure = (res) => {
            console.log("LOGIN FAILED! res: ", res)
        }

 const googleLogin = function Login() {

    return(
        <div id="signInButton">
            <GoogleLogin
            clientId  = {clientID}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            sSignedIn={true}
        />
        </div>
    )

  }


  const renderForm = (

    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname"  required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div id="signInButton">
        {googleLogin}
        </div>
        <div className="button-container">
          <input type="button" value="Sign Up Here" onClick={() => handleClick()}/>
        </div>
      </form>
    </div>

  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {renderForm}
      </div>
    </div>
  );


};

export default Login;



/*
  <script defer="defer" src="build/bundle.js"></script>
    <!-- This is for Google Api OAuth2 -->
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <!-- This is the gapi method -->
    <script>
      function start() {
        // 2. Initialize the JavaScript client library.
        gapi.client.init({
          'apiKey': 'YOUR_API_KEY',
          // clientId and scope are optional if auth is not required.
          'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
          'scope': 'profile',
        }).then(function() {
          // 3. Initialize and make the API request.
          return gapi.client.request({
            'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
          })
        }).then(function(response) {
          console.log(response.result);
        }, function(reason) {
          console.log('Error: ' + reason.result.error.message);
        });
      };
      // 1. Load the JavaScript client library.
      gapi.load('client', start);
      </script>
*/