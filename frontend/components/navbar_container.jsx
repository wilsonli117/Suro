import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';
import { logout } from '../actions/session_actions';
import { openModal } from '../actions/modal_actions';
import { locationFilter } from '../actions/filter_actions';

const mSTP = state => {
   if (state.session.id && state.ui.filters.dates) {
       
       return {
           currentUser: state.entities.users[state.session.id],
           startDate: state.ui.filters.dates.startDate,
           endDate: state.ui.filters.dates.endDate
       }
   } else {
       
       return {
           currentUser: null, 
           startDate: undefined,
           startDate: undefined
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
