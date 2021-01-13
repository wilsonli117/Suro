import React from 'react'
import ShowMap from '../map/show_map';
import Footer from '../splash/footer';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { dateParse, times } from '../../util/date_util';

class CarShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            startDate: this.props.startDate,
            endDate: this.props.endDate
        }

        this.featureIcons = {
            1: <i className="fas fa-car fa-2x"></i>,
            2: <i className="fab fa-android fa-2x"></i>,
            3: <i className="fab fa-apple fa-2x"></i>,
            4: <i className="fas fa-music fa-2x"></i>,
            5: <i className="fas fa-camera fa-2x"></i>,
            6: <i className="fas fa-bicycle fa-2x"></i>,
            7: <i className="far fa-eye-slash fa-2x"></i>,
            8: <i className="fab fa-bluetooth-b fa-2x"></i>,
            9: <i className="fas fa-baby fa-2x"></i>,
            10: <i className="fas fa-wind fa-2x"></i>,
            11: <i className="fas fa-map-marked-alt fa-2x" ></i >,
            12: <i className="fas fa-fire-alt fa-2x"></i>,
            13: <i className="fas fa-lock-open fa-2x"></i>,
            14: <i className="fas fa-paw fa-2x"></i>,
            15: <i className="fas fa-skiing-nordic fa-2x"></i>,
            16: <i className="far fa-snowflake fa-2x"></i>,
            17: <i className="fas fa-sun fa-2x"></i>,
            18: <i className="fas fa-passport fa-2x"></i>,
            19: <i className="fab fa-usb fa-2x"></i>,
            20: <i className="fab fa-usb fa-2x"></i>,
            21: <i className="fas fa-wheelchair fa-2x"></i>
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.history.action === "PUSH") window.scrollTo(0, 0);
        if (!this.props.car) {
            this.props.fetchcar(this.props.match.params.carId);
        }
        this.props.fetchfeatures();
        // this.setState({photoIndex: 0});
        if (!this.state.startDate || !this.state.endDate) {
            const startDate = new Date(sessionStorage.getItem('startdate'));
            const endDate = new Date(sessionStorage.getItem('enddate'));

            this.setState({ startDate: startDate, endDate: endDate });
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.props.fetchcar(this.props.match.params.carId);
            this.setState({ photoIndex: 0 });
        }
        if (this.props.car && !this.props.users[this.props.car.ownerId]) {
            this.props.fetchhost(this.props.car.ownerId)
        }
    }

    handleSubmit(e) {
        // e.preventDefault();
        // if (!this.props.currentUser) {
        //     this.props.openModal('login')    
        // } else {
            
        // }
    }

    handleCarouselClick(dir) {
        if (dir === 'left') {
            (!this.state.photoIndex) ? this.setState({photoIndex: this.props.car.photoURLs.length - 1}) :
            this.setState({photoIndex: this.state.photoIndex - 1 })
        } else {
            this.state.photoIndex === this.props.car.photoURLs.length - 1 ? this.setState({photoIndex: 0}) :
                this.setState({ photoIndex: this.state.photoIndex + 1 })
        }
    }

    render() {
        if(!this.props.car || !this.props.users[this.props.car.ownerId] || !Object.keys(this.props.features).length) return null;
        
        const host = this.props.users[this.props.car.ownerId]
  
        return (
        <>
            <div className="photo-carousel">
                <div className="photo-carousel-left" onClick={() => this.handleCarouselClick('left')}>
                    <i className="fas fa-chevron-left fa-2x"></i>
                </div>
                <div className="carousel-photo-container">
                    <img src={`${this.props.car.photoURLs[this.state.photoIndex]}`}/>
                </div>
                <p>{`${this.state.photoIndex + 1} of ${this.props.car.photoURLs.length}`}</p>
                <div className="photo-carousel-right" onClick={() => this.handleCarouselClick('right')}>
                    <i className="fas fa-chevron-right fa-2x"></i>
                </div>
            </div>

            <div className="show-container">
                <div className="show-info">
                    <div className="car-info">
                        <span><p>THE CAR</p></span>
                        <div>
                            <h1>{`${this.props.car.make} ${this.props.car.model} ${this.props.car.year}`}</h1>
                            <p className="trim">Trim here</p>
                            <div className="car-rating">5.0<i className="fas fa-star"></i><p>{`(1 trip)`}</p></div>
                            <ul>
                                {this.props.car.fuel_type === "Gasoline" ? 
                                    <li><i className="fas fa-gas-pump fa-2x"></i>Gas {this.props.car.hp > 300 ? '(Premium)' : ""}</li> :
                                    <li><i className="fas fa-charging-station fa-2x">Electric</i></li>
                                }
                                <li><i className="fas fa-tachometer-alt fa-2x"></i>{`${this.props.car.hp} HP`}</li>
                                <li><i className="fas fa-car-side fa-2x"></i>{`${this.props.car.numDoors} doors`}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="host-info">
                        <p>HOSTED BY</p>
                        <div>
                            <span>
                                <i className="far fa-user-circle fa-5x"></i>
                                <div className="host-rating">5.0<i className="fas fa-star"></i></div>
                            </span>
                            <div>
                                <h3>{host.firstName}</h3>
                                <p>{`Joined ${dateParse(host.createdAt)}`}</p>
                                <p className="response-time">{`Typically responds in ${Math.floor(Math.random(2) * 15)} minutes`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <p>DESCRIPTION</p>
                        <div>{this.props.car.description}</div>
                    </div>
                    <div className="car-features">
                        <p>FEATURES</p>
                        <ul>
                            {this.props.car.featureIDs.map((featureId, index) => <li key={index + 1}>{this.featureIcons[featureId]}{`${this.props.features[featureId].name}`}</li>)}
                        </ul>
                    </div>
                    <div className="reviews">
                        <p>REVIEWS</p>
                        <div>Book this car and be the first to review it.</div>
                    </div>
                </div>
                <div className="booking-container">
                        <div className="price">
                            <h2>{`$${this.props.car.price}`}</h2>
                            <p>/ day</p>
                        </div>
                        <div className="price-estimate">{`$${this.props.car.price * 3} est. total + fees`}<i className="far fa-question-circle"></i></div>
                        <form className="show-booking-form" onClick={this.handleSubmit}> 
                            <div className="show-booking-start">
                            <p>Trip start</p>
                                <div>
                                    <label htmlFor="show-booking-start-date"></label>
                                    <select id="show-booking-start-date">
                                        <option value="11/07/2020">11/07/2020</option>
                                    </select>
                                    <label htmlFor="show-booking-start-time"></label>
                                    <select id="show-booking-start-time">
                                        {times.map((time, idx) => {
                                            return <option value={time} key={idx}>{time}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="show-booking-end">
                                <p>Trip end</p>
                                <div>
                                    <label htmlFor="show-booking-end-date"></label>
                                    <select id="show-booking-end-date">
                                        <option value="11/09/2020">11/09/2020</option>
                                    </select>
                                    <label htmlFor="show-booking-end-time"></label>
                                    <select id="show-booking-end-time">
                                        {times.map((time, idx) => {
                                            return <option value={time} key={idx}>{time}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="show-booking-location">
                                <label htmlFor="pickup-return-location">Pickup & return location</label>
                                <select id="pickup-return-location">
                                    <option value="">New York, NY 10018</option>
                                </select>
                            </div>
                            <button>Continue</button>
                        </form>
                        <div className="free-cancellation">
                            <i className="far fa-thumbs-up"></i>
                            <div>
                                <div>Free Cancellation</div>
                                <p>Full refund before Sep 30, 10:00 AM</p>
                            </div>
                        </div>
                        <div className="distance-included">
                            <div>
                                <p>Distance included</p>
                                <div>400 mi</div>
                            </div>
                            <p>$3.00/mi fee for additional miles drive</p>
                        </div>
                        <div className="booking-insurance">
                            <p>INSURANCE & PROTECTION</p>
                            <div>Insurance via owner <i className="far fa-question-circle"></i></div>
                            <p>The vehicle owner may offer you liability insurance or physical damage protection outside of Turo for a fee after you book.</p>
                        </div>
                        <button><i className="far fa-heart"></i>Add to favorites</button>
                        <div className="booking-form-icons">
                            <div><i className="fab fa-github-square fa-2x"></i></div>
                            <div><i className="fab fa-linkedin fa-2x"></i></div>
                            <div><i className="fab fa-twitter-square fa-2x"></i></div>
                            <div><i className="fas fa-envelope-square fa-2x"></i></div>
                        </div>
                        <div>
                            <p>Report listing</p>
                            <p>Cancellation policy</p>
                        </div>
                </div>
            </div>
            <div className="show-map-container">
                <ShowMap car={[this.props.car]}/>
            </div>
            <Footer />
        </>
        )
    }
}

export default CarShow;