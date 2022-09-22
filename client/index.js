import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';

import  { App }  from './App';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <GoogleOAuthProvider clientId="830039597158-6nhs6p1u8eabg6k01r5qtnam1u1fa75q.apps.googleusercontent.com">
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  </GoogleOAuthProvider>,
);
