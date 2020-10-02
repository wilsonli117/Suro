import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { locationFilter } from '../../actions/filter_actions';
import Search from './search';

const mDTP = dispatch => {
    return {
        locationFilter: center => dispatch(locationFilter(center))
    }
}

export default withRouter(connect(null, mDTP)(Search));