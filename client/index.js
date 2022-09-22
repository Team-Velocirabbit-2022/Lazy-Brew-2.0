import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { createRoot } from 'react-dom/client';

import  { App }  from './App';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
