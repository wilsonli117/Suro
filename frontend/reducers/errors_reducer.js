import { combineReducers } from 'redux';
import sessionErrorsReducer from "./session_errors_reducer";
import carErrorsReducer from './car_errors_reducer';
import bookingErrorsReducer from './booking_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    car: carErrorsReducer,
    booking: bookingErrorsReducer
})

export default errorsReducer;