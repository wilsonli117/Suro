import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';
import { logout } from '../actions/session_actions';
import { openModal } from '../actions/modal_actions';
import { locationFilter } from '../actions/filter_actions';

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
        openModal: modal => dispatch(openModal(modal)),
        locationFilter: center => dispatch(locationFilter(center))
    }
}

export default withRouter(connect(mSTP, mDTP)(NavBar));
