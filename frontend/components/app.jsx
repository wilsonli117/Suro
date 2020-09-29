import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import NavBar from './navbar_container';
import Splash from './splash/splash';
import CarIndex from './cars/car_index_container';
import CarShow from './cars/car_show_container';

const App = () => {
    return (
        <div id="root-div">
            <Modal />
            <header>
                <NavBar />
            </header>

            <Route exact path="/cars" component={CarIndex} />
            <Route exact path="/cars/:carId" component={CarShow} />
            <Route exact path="/" component={Splash}/>

        </div>
    )
}

export default App;