import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

class ShowMap extends React.Component {
    componentDidMount() {

        const { car } = this.props;

        const map = ReactDOM.findDOMNode(this.refs.map)
        const mapOptions = {
            center: { lat: car[0].latitude, lng: car[0].longitude }, //car is an array
            zoom: 15,
            zoomControl: false,
            gestureHandling: 'none',
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
        };

        this.map = new google.maps.Map(map, mapOptions);
        this.MarkerManager = new MarkerManager(this.map)

        this.MarkerManager.updateMarkers(this.props.car)
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.car)
    }

    render() {
        return (
            <div id='map' ref='map'></div>
        )
    }
}

export default ShowMap;