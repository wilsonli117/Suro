import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = props => {
    if (!props.currentUser) {
        return (
            <nav className="nav-bar">
                <Link to="/">Logo Place Holder</Link>

                <ul>
                    <li><Link to="">List your car</Link></li>
                    <li className="nav-learn">Learn more</li>
                    <li><Link to="/login">Log in</Link></li>
                    <li><Link to="/signup">Sign up</Link></li>
                    <li>User Icon</li>
                </ul>
       
            </nav>
        )
    } else {
        return (
            <nav className="nav-bar">
                <Link to="/">Logo Place Holder</Link>

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