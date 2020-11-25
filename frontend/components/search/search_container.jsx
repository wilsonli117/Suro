import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { locationFilter, updateFilter } from '../../actions/filter_actions';
import Search from './search';

const mDTP = dispatch => {
    return {
        locationFilter: center => dispatch(locationFilter(center)),
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
    }
}

export default withRouter(connect(null, mDTP)(Search));