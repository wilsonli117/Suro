import { RECEIVE_CARS, RECEIVE_CAR } from "../actions/car_actions";

const carsReducer = (state={}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        
        case RECEIVE_CARS:
            return action.cars
        
        case RECEIVE_CAR:
            const newState = Object.assign({}, state);
            newState[action.car.id] = action.car
            return newState
        
        default:
            return state;
    }
}

export default carsReducer;