import { connect } from 'react-redux';
import { fetchcar, fetchfeatures, fetchhost } from '../../actions/car_actions';
import CarShow from './car_show';

const mSTP = (state, ownProps) => {
    return {
        car: state.entities.cars[ownProps.match.params.carId],
        users: state.entities.users,
        features: state.entities.features,
    }
}

const mDTP = dispatch => {
    return {
        fetchcar: carId => dispatch(fetchcar(carId)),
        fetchhost: hostId => dispatch(fetchhost(hostId)),
        fetchfeatures: () => dispatch(fetchfeatures())
    }
}

export default connect(mSTP, mDTP)(CarShow);
