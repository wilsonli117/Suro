import { fetchcars } from './car_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';

// export const updateBounds = bounds => {
//     return {
//         type: UPDATE_BOUNDS,
//         bounds
//     }
// }

export const updateFilter = (filter, value) => {
    return {
        type: UPDATE_FILTER,
        filter, 
        value
    }
}

export const updatefilter = (filter, value) => (dispatch, getState) => {
    dispatch(updateFilter(filter, value));
    return fetchcars(getState().ui.filters)(dispatch);
}