import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from "./components/AppContainer"
import reportWebVitals from './reportWebVitals';
import './assets/app.min.css';
ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
