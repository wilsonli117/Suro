import { connect } from 'react-redux';
import { fetchcars } from '../../actions/car_actions';
import { updatefilter } from '../../actions/filter_actions';
import CarIndex from './car_index';

const mSTP = (state, ownProps) => {
    return {
        cars: Object.values(state.entities.cars),
        mapCenter: state.ui.filters.center
    }
}

const mDTP = dispatch => {
    return {
        fetchcars: () => dispatch(fetchcars()),
        updatefilter: (filter, value) => dispatch(updatefilter(filter, value))
    }
}

export default connect(mSTP, mDTP)(CarIndex);

