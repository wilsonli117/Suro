import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../actions/session_actions';

const mSTP = state => {
   return {
       loggedIn: Boolean(state.session.id)
   }
}

const mDTP = dispatch => {
    return {
        action: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(NavBar);
