import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {
    componentDidMount() {

        const map = ReactDOM.findDOMNode(this.refs.map)
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: true
        
        };

        this.map = new google.maps.Map(map, mapOptions);
    }

    render() {
        return (
            <div id='map' ref='map'></div>
        )
    }
}

export default Map;