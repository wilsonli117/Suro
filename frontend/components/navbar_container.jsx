import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../actions/session_actions';

const mSTP = state => {
   if (state.session.id) {
       return {
           currentUser: state.entities.users[state.session.id]
       }
   } else {
       return {
           currentUser: null
       }
   }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(NavBar);
