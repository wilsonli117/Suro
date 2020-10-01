export const fetchCars = filters => {
    return (
        $.ajax({
            url: "api/cars",
            method: "GET",
            data: filters
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