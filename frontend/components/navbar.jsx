import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = props => {
    
    if (props.location.pathname == '/cars') {
        return (
            <>
            <nav className="car-index-nav-bar">
                <div className="car-index-nav-search">
                <Link className="logo" to="/"><img src={window.logoURL} alt="Suro" /></Link>   
                    <div className="index-where"> 
                        <p>Where</p>
                        <label htmlFor="index-nav-where"></label>
                        <input type="text" id="index-nav-where" placeholder="Map location"/>
                    </div>
                    <div className="index-from">
                        <p>From</p>
                        <label htmlFor="index-nav-from-date"></label>
                        <select id="index-nav-from-date">
                            <option>11/07/2020   </option>
                        </select>
                        <label htmlFor="index-nav-from-time"></label>
                        <select id="index-nav-from-time" >
                            <option value="18:00">6:00 PM   </option>
                        </select>
                    </div>
                    <div className="index-until">
                        <p>Until</p>
                        <label htmlFor="index-nav-until-date"> </label>
                        <select id="index-nav-until-date">
                            <option>11/08/2020   </option>
                        </select>
                        <label htmlFor="index-nav-until-time"></label>
                        <select id="index-nav-until-time" >
                            <option value="20:00">10:00 PM   </option>
                        </select>
                    </div>
                </div>
                    <div id="index-dd-trigger">
                        <i className="far fa-user-circle fa-2x"></i>
                        <ul className="car-index-nav-dd">
                            { props.currentUser ?
                            <>
                                <li>Host</li>
                                <li>Trips</li>
                                <li>Account</li>
                                <li>Profile</li>
                                <li>Favorites</li>
                                <li>Carculator</li>
                                <li>Host tools</li>
                                <li>Get help</li>
                                <li onClick={() => props.logout(props.currentUser.id)}>Log out</li>
                            </>
                            :
                            <>
                                <li onClick={() => props.openModal('login')}>Log in</li>
                                <li onClick={() => props.openModal('signup')}>Sign up</li>
                                <li className="separator">How Suro works</li>
                                <li>Insurance & protection</li>
                                <li>Carculator</li>
                                <li>Host tools</li>
                                <li>Get help</li>
                            </>
                            }
                        </ul>
                    </div>
            </nav>
            <div className="index-nav-filters">
                <button>Sort By</button>
                <button>Price</button>
                <button>Book Instantly</button>
                <button>Delivery</button>
                <button>Distance included</button>
                <button><i className="fas fa-sliders-h"></i>More filters</button>
            </div>
            </>
        )
    }

    if (!props.currentUser) {
        return (
            <nav className="no-login-nav-bar">
                <Link className="logo" to="/"><img src={window.logoURL} alt="Suro"/></Link>

                <ul className="nav-ul">
                    <li><Link to="">List your car</Link></li>
                    <li className="nav-learn">
                        <div className="nav-learn-trigger-1">Learn more
                            <ul className="nav-learn-dropdown">
                                <li><p>How Suro Works</p></li>
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
                                    <li><p>How Suro Works</p></li>
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