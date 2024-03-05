//npm i react-router-dom

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from 'react-dom' instead of 'react-dom/client'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

