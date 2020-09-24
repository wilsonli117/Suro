import React from 'react';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import NavBar from './navbar_container';
import Search from './search/search';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => {
    return (
        <div>
            <Modal />
            <header>
            <NavBar />
            </header>
            <Search />
        
        </div>
    )
}

export default App;