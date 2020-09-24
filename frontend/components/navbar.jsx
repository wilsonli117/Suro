import React from 'react';
import { Link } from 'react-router-dom'
import { openModal } from '../actions/modal_actions';

const NavBar = props => {
    if (!props.currentUser) {
        return (
            <nav className="no-login-nav-bar">
                <Link className="logo" to="/"><img src={window.logoURL} alt="Suro"/></Link>

                <ul className="nav-ul">
                    <li><Link to="">List your car</Link></li>
                    <li className="nav-learn">
                        <div className="nav-learn-trigger-1">Learn more
                            <ul className="nav-learn-dropdown">
                                <li><p>How Turo Works</p></li>
                                <li><p>Insurance & protection</p></li>
                                <li><p>Carculator</p></li>
                                <li><p>Host tools</p></li>
                            </ul>
                        </div>
                    </li>
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
                                    <li><p>How Turo Works</p></li>
                                    <li><p>Insurance & protection</p></li>
                                    <li><p>Carculator</p></li>
                                    <li><p>Host tools</p></li>
                                </ul>
                            </div>
                   
                    </li>
                    <li>
                        <div className="nav-trips-trigger">Trips
                            <ul className="nav-trips-dropdown">
                                <li><p>Activity</p></li>
                                <li><p>Booked</p></li>
                                <li><p>History</p></li>
                            </ul>
                        </div>
                    </li>
                    <li><Link to="">Messages</Link></li>
                    <li > 
                        <div className="nav-user-trigger">
                            <i className="far fa-user-circle fa-2x"></i>
                            <ul className="nav-user-dd">
                                <li><p>Profile</p></li>
                                <li><p>Favorites</p></li>
                                <li><p>List your car</p></li>
                                <li><p>Account</p></li>
                                <li><p>Contact support</p></li>
                                <li onClick={() => props.logout(props.currentUser.id)}><p>Log out</p></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;