import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import NavBar from './navbar_container';
import Splash from './splash/splash';

const App = () => {
    return (
        <div>
            <Modal />
            <header>
                <NavBar />
            </header>

            <Route path="/" component={Splash}/>

        </div>
    )
}

export default App;