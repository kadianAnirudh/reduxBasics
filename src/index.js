import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Login, Profile, ChangeColor} from './components'
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import userReducer from './Features/user';
import colorReducer from './Features/color'


const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer : { 
    user : userReducer, // user is the name of reducer now available globally
    color : colorReducer
  }
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    <Profile/>
    <Login/>
    <ChangeColor />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
