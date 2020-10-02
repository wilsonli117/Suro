import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class Map extends React.Component {
    componentDidMount() {
       
        const map = ReactDOM.findDOMNode(this.refs.map)
        
        const mapOptions = {
            center: Object.keys(this.props.center).length ? this.props.center : { lat: 40.7472736, lng: -74.0038576 }, 
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
        
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        this.MarkerManager.updateMarkers(this.props.cars);

        google.maps.event.addListener(this.map, 'idle', () => {
            const mapBounds = this.map.getBounds(); //returns LatLngBounds class instance, can use getNorthEast and getSouthWest methods, then to_JSON on return values of those methods to return LatLngBoundsLiteral instances
            
            const bounds = {
                northEast: { lat: mapBounds.getNorthEast().lat(), lng: mapBounds.getNorthEast().lng() },
                southWest: { lat: mapBounds.getSouthWest().lat(), lng: mapBounds.getSouthWest().lng() }
            };
            this.props.updatefilter('bounds', bounds);
        });
    }

    componentDidUpdate(prevProps) {
    
        if (prevProps.center.lat !== this.props.center.lat || prevProps.center.lng !== this.props.center.lng) {
            this.map.setCenter(new google.maps.LatLng(this.props.center.lat, this.props.center.lng))
           
        }
        this.MarkerManager.updateMarkers(this.props.cars);
    }

    handleMarkerClick(car) {
        this.props.history.push(`cars/${car.id}`)
    }

    render() {
        return (
            <div id='map' ref='map'></div>
        )
    }
}

export default withRouter(Map);