import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';
import { logout } from '../actions/session_actions';
import { openModal } from '../actions/modal_actions';
import { locationFilter, updatefilter, updateFilter } from '../actions/filter_actions';

const mSTP = state => {
    
   if (state.session.id) {
       return {
           currentUser: state.entities.users[state.session.id],
           dates: state.ui.filters.dates
       }
   } else {
       return {
           currentUser: null, 
           dates: state.ui.filters.dates
       }
   }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        locationFilter: center => dispatch(locationFilter(center)),
        updatefilter: (filter, value) => dispatch(updatefilter(filter, value)),
        updateFilter: (filter, value) => dispatch(updatefilter(filter, value))
    }
}

export default withRouter(connect(mSTP, mDTP)(NavBar));
