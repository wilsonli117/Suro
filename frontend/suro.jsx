import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import Root from './components/root';
import { logIn, logOut } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {

    const root = document.getElementById("root");
    const store = configureStore();

    window.login = logIn;
    window.logout = logOut;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    ReactDOM.render(<h1>SURO TEST</h1>, root);
})