import React from 'react';

/**
 * ********************
 * @module APIFunctions
 * ********************
 **/

//API FUNCTIONS OBJECT
const APIFunctions = {};

// VERIFY LOGIN

APIFunctions.verifyLogin = async (username, password) => {
  console.log("TRYING TO VERIFY LOGIN IN APIFUNCTIONS");
  const url = '/api/user/login';

  const data = {
    user_name: username,
    password: password,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((returnedData) => {
      return returnedData;
    })
    .catch((err) => console.log('Error verifying Login', err));

  return response;
};

// CREATE ACCOUNT

APIFunctions.createUser = async (username, password, email) => {
  console.log("TRYING TO CREATE USER IN APIFUNCTIONS");
  const url = '/api/user/new_user';
  const data = {
    user_name: username,
    password: password,
    email: email
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((returnedData) => console.log("User successfully created in SQL database! User ID is:", returnedData))
    .then((returnedData) => returnedData)
    .catch((err) => console.log('Error creating new user data', err));

  return response;

};

export default APIFunctions;
