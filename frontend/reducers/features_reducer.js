import { RECEIVE_FEATURES } from '../actions/car_actions';

const featuresReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {

        case RECEIVE_FEATURES:
            return action.features
        
        default: 
            return state;
    
    }
}

export default featuresReducer;