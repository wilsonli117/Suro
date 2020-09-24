import React from 'react';
import { Link } from 'react-router-dom'
import { openModal } from '../actions/modal_actions';

const NavBar = props => {
    if (!props.currentUser) {
        return (
            <nav className="no-login-nav-bar">
                <Link className="logo" to="/"><img src="/assets/logo.png" alt="Suro"/></Link>

                <ul>
                    <li><Link to="">List your car</Link></li>
                    <li className="nav-learn">Learn more</li>
                    <li className="modal" onClick={() => props.openModal('login')}>Log in</li>
                    <li className="modal" onClick={() => props.openModal('signup')}>Sign up</li>
                    <i className="far fa-user-circle fa-2x"></i>
                </ul>
       
            </nav>
        )
    } else {
        return (
            <nav className="login-nav-bar">
                <Link className="logo" to="/"><img src={window.logoURL} alt="Suro" /></Link>

                <ul className="nav-ul">
                    <li><Link to="">List your car</Link></li>
                    <li>
                        <div className="nav-learn-trigger">Learn more
                            <ul className="nav-learn-dropdown">
                                <li>How Turo Works</li>
                                <li>Insurance & protection</li>
                                <li>Carculator</li>
                                <li>Host tools</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="nav-trips-trigger">Trips
                            <ul className="nav-trips-dropdown">
                                <li>Activity</li>
                                <li>Booked</li>
                                <li>History</li>
                            </ul>
                        </div>
                    </li>
                    <li><Link to="">Messages</Link></li>
                    <li > 
                        <div className="nav-user-trigger">
                            <i className="far fa-user-circle fa-2x"></i>
                            <ul className="nav-user-dropdown">
                                <li>Profile</li>
                                <li>Favorites</li>
                                <li>List your car</li>
                                <li>Account</li>
                                <li>Contact support</li>
                                <li onClick={() => props.logout(props.currentUser.id)}>Log out</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;