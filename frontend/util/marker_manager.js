export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(cars) {
        const carsObj = {};

        cars.forEach(car => {
            carsObj[car.id] = car;
            if (!this.markers[car.id]) this.createMarker(car);
        });


        Object.keys(this.markers).forEach(carId => {
            if (!carsObj[carId]) this.removeMarker(this.markers.carId);
        })

    }

    createMarker(car) {
        const position = new google.maps.LatLng(car.latitude, car.longitude);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            carId: car.id
        });

        this.markers[marker.carId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.carId].setMap(null);
        delete this.markers[marker.carId];
    }


}