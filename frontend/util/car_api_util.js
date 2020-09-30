export const fetchCars = () => {
    return (
        $.ajax({
            url: "api/cars",
            method: "GET"
        })
    )
}

export const fetchCar = carId => {
    return (
        $.ajax({
            url:`api/cars/${carId}`,
            method: "GET"
        })
    )
}

export const fetchFeatures = () => {
    return (
        $.ajax({
            url: "api/features",
            method: "GET"
        })
    )
}

export const fetchHost = hostId => {
    return (
        $.ajax({
            url: `api/users/${hostId}`,
            method: "GET"
        })
    )
}