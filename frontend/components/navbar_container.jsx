import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';
import { logout } from '../actions/session_actions';
import { openModal } from '../actions/modal_actions';

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
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default withRouter(connect(mSTP, mDTP)(NavBar));
