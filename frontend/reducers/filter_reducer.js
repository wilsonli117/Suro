import { UPDATE_FILTER, UPDATE_CENTER} from '../actions/filter_actions';

const defaultFilters = {
    bounds: {},
    center: {}
}

const filtersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);

    switch(action.type) {
        case UPDATE_FILTER:
            return Object.assign({}, state, { [action.filter]: action.value });
        
        case UPDATE_CENTER:
            return Object.assign({}, state, action.center)

        default:
            return state;
    }
}

export default filtersReducer;