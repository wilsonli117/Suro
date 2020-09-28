import React from 'react';
import CarNavBar from './car_index_navbar_container';

class CarIndex extends React.Component {
    componentDidMount() {
        this.props.fetchcars();
    }

    render() {
       
        return (
            <>
            {/* <CarNavBar /> */}
            <div className="car-container">
            <ul>
                {this.props.cars.map((car, index) => {
                   
                   return (
                        <li key={index + 1}>
                            <img src={car.photoURLs[0]} />
                            <div>{`${car.make} ${car.model} ${car.year}`}</div>
                            <div>{`${car.price}/day`}</div>
                        </li>
                    )
                })}
            </ul>
            </div>
            <div className="map-container">

            </div>
            </>
        )
    }
}

export default CarIndex;
