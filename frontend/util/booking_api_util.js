export const fetchBooking = bookingId => {
    return (
        $.ajax({
            url: `api/bookings/${bookingId}`,
            method: "GET"
        })
    )
}

export const createBooking = booking => {
    return (
        $.ajax({
            url: 'api/bookings',
            method: "POST",
            data: { booking }
        })
    )
}


export const cancelBooking = bookingId => {
    return (
        $.ajax({
            url: `api/bookings/${bookingId}`,
            method: "DELETE"
        })
    )
}