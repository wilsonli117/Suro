import { fetchBooking, createBooking, cancelBooking } from '../util/booking_api_util';

export const RECEIVE_BOOKING = "RECEIVE_BOOKING"
export const REMOVE_BOOKING = "REMOVE_BOOKING"
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS"

export const receiveBooking = booking => {
    return ({
        type: RECEIVE_BOOKING,
        booking
    })
}

export const removeBooking = booking => {
    return ({
        type: REMOVE_BOOKING,
        bookingId: booking.id
    })
}

export const receiveBookingErrors = errors => {
    return {
        type: RECEIVE_BOOKING_ERRORS,
        errors
    }
}

export const fetchbooking = bookingId => dispatch => fetchBooking(bookingId)
    .then(booking => dispatch(receiveBooking(booking)), 
    errors => dispatch(receiveBookingErrors(errors)))

export const createbooking = booking => dispatch => createBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)),
    errors => dispatch(receiveBookingErrors(errors)))

export const cancelbooking = bookingId => dispatch => cancelBooking(bookingId)
    .then(booking => dispatch(removeBooking(booking)))