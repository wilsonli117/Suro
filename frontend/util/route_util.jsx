import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mSTP = state => {
    return {
        loggedIn: Boolean(state.session.id)
    }
}

const Auth = ({ loggedIn, path, exact, component: Component }) => {
    return (
        <Route 
            path={path}
            exact={exact}
            render={props =>
                loggedIn ? <Redirect to="/" /> : <Component {...props} />
            }
        />
    )
}

export const AuthRoute = withRouter(connect(mSTP, null)(Auth))