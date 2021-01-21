export const sortCars = (cars, sort) => {

    if (sort === 'lowToHigh') {
        cars.sort((a, b) => {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            return 0;
        }) 
    } else if (sort === 'highToLow') {
        cars.sort((a, b) => {
            if (a.price > b.price) return -1;
            if (a.price < b.price) return 1;
            return 0;
        }) 
    } else if (sort === 'relevance') {
        cars.sort((a, b) => {
            if (a.id > b.id) return 1;
            if (a.id< b.id) return -1;
        }) 
    }

    return cars;

}

export const makeModelFormat = (make, model) => {
    let result = `${make} ${model}`

    if (result.length > 16) {
        return result.slice(0, 17) + '...';
    } else {
        return result;
    }
}