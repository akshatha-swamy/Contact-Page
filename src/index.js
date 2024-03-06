//npm i react-router-dom

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from 'react-dom' instead of 'react-dom/client'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer position="top-center" // or "bottom-center"
  autoClose={5000} // milliseconds, set to 0 to disable auto close
  hideProgressBar={false} // set to true if you don't want the progress bar
  newestOnTop={false} // set to true if you want newest toast to appear on top
  closeOnClick={true}
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover/>
    </BrowserRouter>
  </React.StrictMode>
);

