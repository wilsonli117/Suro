import React from 'react';
import { Link } from 'react-router-dom'
import { openModal } from '../actions/modal_actions';

const NavBar = props => {
    if (!props.currentUser) {
        return (
            <nav className="nav-bar">
                <Link className="logo" to="/"><img src="/assets/logo.png" alt="Suro"/></Link>

                <ul>
                    <li><Link to="">List your car</Link></li>
                    <li className="nav-learn">Learn more</li>
                    <li><a onClick={() => props.openModal('login')}>Log in</a></li>
                    <li><a onClick={() => props.openModal('signup')}>Sign up</a></li>
                    <i className="far fa-user-circle fa-2x"></i>
                </ul>
       
            </nav>
        )
    } else {
        return (
            <nav className="nav-bar">
                <Link className="logo" to="/"><img src="/assets/logo.png" alt="Suro" /></Link>

                <ul>
                    
                    <li className="nav-learn">Learn more</li>
                    <li className="nav-trips">Trips</li>
                    <li><Link to="">Messages</Link></li>
                    <li className="nav-user">User Thumbnail Photo</li>
                </ul>
                <button onClick={()=> props.logout(props.currentUser.id)}>Temporary Log Out Button</button>
            </nav>
        )
    }
}

export default NavBar;