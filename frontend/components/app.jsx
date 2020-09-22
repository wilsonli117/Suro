import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './navbar';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => {
    return (
        <div>
            <header>
            <h1>SURO TEST FROM APP COMPONENT</h1>
            <NavBar />
            </header>

            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </div>
    )
}

export default App;