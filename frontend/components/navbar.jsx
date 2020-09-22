import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = props => {

    if (!props.loggedIn) {
        return (
            <nav>
                <Link to="/">Logo Place Holder</Link>

                <ul>
                    <li><Link to="/">List your car</Link></li>
                    <li>Learn more</li>
                    <li><Link to="/login">Log in</Link></li>
                    <li><Link to="/signup">Sign up</Link></li>
                    <li>User Icon</li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;