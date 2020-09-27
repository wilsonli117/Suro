import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import carsReducer from './cars_reducer';
import featuresReducer from './features_reducer';

export default combineReducers({
    users: usersReducer,
    cars: carsReducer,
    features: featuresReducer
});