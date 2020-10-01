import { RECEIVE_BOOKING, RECEIVE_BOOKING_ERRORS } from '../actions/booking_actions';

const bookingErrorsReducer = (state=[], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_BOOKING_ERRORS:
            return [actions.errors.reponseText]
        
        case RECEIVE_BOOKING:
            return [];

        default: 
            return state;
    
    }
}

export default bookingErrorsReducer;