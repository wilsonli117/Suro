import { RECEIVE_CAR_ERRORS, RECEIVE_CAR } from '../actions/car_actions';

const carErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    debugger
    switch(action.type) {

        case RECEIVE_CAR_ERRORS:
            return [action.errors.responseJSON[0]];

        case RECEIVE_CAR:
            return [];

        default:
            return state;
    }
}

export default carErrorsReducer;