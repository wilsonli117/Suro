import React from 'react';
import { AuthRoute } from '../util/route_util';
import NavBar from './navbar_container';
import Modal from './modal/modal';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => {
    return (
        <div>
            <Modal />
            <header>
            <NavBar />
            </header>
            <div className='parent'>
                <img src={window.gtrURL} alt="GT-R" className="car-pic"/>
            </div>

        
        </div>
    )
}

export default App;