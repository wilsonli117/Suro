import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchcar, fetchfeatures, fetchhost } from '../../actions/car_actions';
import { openModal } from '../../actions/modal_actions';
import { updateFilter } from '../../actions/filter_actions';
import CarShow from './car_show';

const mSTP = (state, ownProps) => {
    if (state.session.id) {
        return {
            car: state.entities.cars[ownProps.match.params.carId],
            dates: state.ui.filters.dates,
            users: state.entities.users,
            features: state.entities.features,
            currentUser: state.entities.users[state.session.id]
        }
    } else {
        return {
            car: state.entities.cars[ownProps.match.params.carId],
            dates: state.ui.filters.dates,
            users: state.entities.users,
            features: state.entities.features,
            currentUser: null
        }
    }
}

const mDTP = dispatch => {
    return {
        fetchcar: carId => dispatch(fetchcar(carId)),
        fetchhost: hostId => dispatch(fetchhost(hostId)),
        fetchfeatures: () => dispatch(fetchfeatures()),
        openModal: modal => dispatch(openModal(modal)),
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
    }
}

export default withRouter(connect(mSTP, mDTP)(CarShow));
