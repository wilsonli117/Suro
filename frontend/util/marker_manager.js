import React from 'react';

export default class MarkerManager {
    constructor(map, handleMarkerClick) {
        this.map = map;
        this.markers = {};
        this.handleMarkerClick = handleMarkerClick;
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
        
        // const info = `$${car.price}`
            
        // const infowindow = new google.maps.InfoWindow({
        //     content: info,
        // })
        const image = 'https://suro-seeds.s3.amazonaws.com/marker-icon.png'
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            carId: car.id,
            icon: image
        });

        marker.addListener("click", () => this.handleMarkerClick(car));

        this.markers[marker.carId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.carId].setMap(null);
        delete this.markers[marker.carId];
    }


}