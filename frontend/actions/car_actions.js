import { fetchCars, fetchCar, fetchFeatures } from '../util/car_api_util';

export const RECEIVE_CARS = "RECEIVE_CARS"
export const RECEIVE_CAR = "RECEIVE_CAR"
export const RECEIVE_CAR_ERRORS = "RECEIVE_CAR_ERRORS"
export const RECEIVE_FEATURES = "RECEIVE_FEATURES"

export const receiveCars = cars => {
    return {
        type: RECEIVE_CARS,
        cars
    }
}

export const receiveCar = car => {
    return {
        type: RECEIVE_CAR, 
        car
    }
}

export const receiveFeatures = features => {
    return {
        type: RECEIVE_FEATURES,
        features
    }
}

export const receiveCarErrors = errors => {
    return {
        type: RECEIVE_CAR_ERRORS,
        errors
    }
}

export const fetchcars = () => dispatch => fetchCars()
    .then(cars => dispatch(receiveCars(cars)))

export const fetchcar = carId => dispatch => fetchCar(carId)
    .then(car => dispatch(receiveCar(car)), 
    errors => dispatch(receiveCarErrors(errors)))

export const fetchfeatures = () => dispatch => fetchFeatures()
    .then(features => dispatch(receiveFeatures(features)))

    