import React from 'react';
import Map from '../map/map';
import { Link } from 'react-router-dom';

class CarIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // this.props.fetchcars();
    
        if (this.props.history.action === "PUSH") window.scrollTo(0, 0);
        if (this.props.history.action === "POP") {
            //retrieves dates from localstorage when user refreshes
            this.props.updatefilter('dates', { startDate : sessionStorage.getItem('startdate'), endDate : sessionStorage.getItem('enddate') });
        }
    }

    render() {
       
        if (!Object.keys(this.props.mapCenter).length && this.props.history.action === "POP") {
       
            this.storageCenter = {
                lat: parseFloat(sessionStorage.getItem('lat')),
                lng: parseFloat(sessionStorage.getItem('lng'))
            }
        }
  
        return (
            <div className="index-container">
                <div className="index-cars-container">
                    <ul>
                        {this.props.cars.map((car, index) => {
                        return (
                                
                                <Link to={`/cars/${car.id}`} key={index + 1} className="car-card">
                                    <img src={car.photoURLs[0]} />
                                    <div className="car-name">{`${car.make} ${car.model} ${car.year}`}</div>
                                    <div className="car-price">{`$${car.price}/day`}</div>
                                </Link>
        
                            )
                        })}
                    </ul>
                    <div className="end-of-results">
                        <i className="fas fa-search fa-7x"></i>
                        <h3>No more cars available</h3>
                        <p>Try changing your filters, adjusting your dates, or exploring the map</p>
                    </div>
                </div>
                <div className="map">
                    <div className="map-container">
                        <Map cars={this.props.cars} updatefilter={this.props.updatefilter} center={Object.keys(this.props.mapCenter).length ? this.props.mapCenter : this.storageCenter}/>
                    </div>
                </div>
             
            </div >
        )
    }
}

export default CarIndex;
