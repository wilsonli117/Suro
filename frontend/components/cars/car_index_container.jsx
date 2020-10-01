import { connect } from 'react-redux';
import { fetchcars } from '../../actions/car_actions';
import { updateBounds } from '../../actions/filter_actions';
import CarIndex from './car_index';

const mSTP = (state, ownProps) => {
    return {
        cars: Object.values(state.entities.cars)
    }
}

const mDTP = dispatch => {
    return {
        fetchcars: () => dispatch(fetchcars()),
        updateBounds: bounds => dispatch(updateBounds(bounds))
    }
}

export default connect(mSTP, mDTP)(CarIndex);

