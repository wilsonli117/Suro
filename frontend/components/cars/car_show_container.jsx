import { connect } from 'react-redux';
import { fetchcar } from '../../actions/car_actions';
import CarShow from './car_show';

const mSTP = (state, ownProps) => {
    return {
        car: state.entities.cars[ownProps.match.params.carId]
    }
}

const mDTP = dispatch => {
    return {
        fetchcar: carId => dispatch(fetchcar(carId))
    }
}

export default connect(mSTP, mDTP)(CarShow);
