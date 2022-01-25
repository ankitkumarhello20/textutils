import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//this is  the server starting point of app //we will run this
ReactDOM.render(
  //this is strictmode code will be checked strictly syntaxically
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root') //by root we grab the id of index.html(basically grabbing index.html)
  //index.html is the entry point
);

reportWebVitals();
