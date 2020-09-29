import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

class Map extends React.Component {
    componentDidMount() {

        const map = ReactDOM.findDOMNode(this.refs.map)
        const mapOptions = {
            center: { lat: 40.7472736, lng: -74.0038576 }, // this is SF
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
        this.MarkerManager = new MarkerManager(this.map)

        this.MarkerManager.updateMarkers(this.props.cars)
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.cars)
    }

    render() {
        return (
            <div id='map' ref='map'></div>
        )
    }
}

export default Map;