import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = props => {

    if (!props.loggedIn) {
        return (
            <nav>
                <Link>Logo Place Holder</Link>

                <ul>
                    <Link>List your car</Link>
                    <li>Learn more</li>
                    <Link>Log in</Link>
                    <Link>Sign up</Link>
                    <li>User Icon</li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;