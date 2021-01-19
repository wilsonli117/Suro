import React from 'react'
import ShowMap from '../map/show_map';
import Footer from '../splash/footer';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { dateParse, times, formatDate, defaultTime, parseTime, cancellationDate, daysBetween } from '../../util/date_util';

class CarShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleStartDayChange = this.handleStartDayChange.bind(this);
        this.handleEndDayChange = this.handleEndDayChange.bind(this);
        this.handleTimeSelect = this.handleTimeSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            photoIndex: 0,
            startDate: this.props.startDate,
            endDate: this.props.endDate
        }

        this.featureIcons = {
            1: <i className="fas fa-car fa-lg"></i>,
            2: <i className="fab fa-android fa-lg"></i>,
            3: <i className="fab fa-apple fa-lg"></i>,
            4: <i className="fas fa-music fa-lg"></i>,
            5: <i className="fas fa-camera fa-lg"></i>,
            6: <i className="fas fa-bicycle fa-lg"></i>,
            7: <i className="far fa-eye-slash fa-lg"></i>,
            8: <i className="fab fa-bluetooth-b fa-lg"></i>,
            9: <i className="fas fa-baby fa-lg"></i>,
            10: <i className="fas fa-wind fa-lg"></i>,
            11: <i className="fas fa-map-marked-alt fa-lg" ></i >,
            12: <i className="fas fa-fire-alt fa-lg"></i>,
            13: <i className="fas fa-lock-open fa-lg"></i>,
            14: <i className="fas fa-paw fa-lg"></i>,
            15: <i className="fas fa-skiing-nordic fa-lg"></i>,
            16: <i className="far fa-snowflake fa-lg"></i>,
            17: <i className="fas fa-sun fa-lg"></i>,
            18: <i className="fas fa-passport fa-lg"></i>,
            19: <i className="fab fa-usb fa-lg"></i>,
            20: <i className="fab fa-usb fa-lg"></i>,
            21: <i className="fas fa-wheelchair fa-lg"></i>
        }
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
        // if (this.props.location !== prevProps.location) {
        //     this.props.fetchcar(this.props.match.params.carId);
        //     this.setState({ photoIndex: 0 });
        // }
        if (this.props.car && !this.props.users[this.props.car.ownerId]) {
            this.props.fetchhost(this.props.car.ownerId)
        }
    }

    handleStartDayChange(selectedDay) {
        const hours = this.state.startDate.getHours();
        const minutes = this.state.startDate.getMinutes();

        selectedDay.setHours(hours);
        selectedDay.setMinutes(minutes);

        if (selectedDay < this.state.endDate) {
            this.setState({ startDate: selectedDay }, () => {
                sessionStorage.setItem('startdate', this.state.startDate.toString());
                this.props.updateFilter("dates", { startDate: this.state.startDate, endDate: this.state.endDate })
            })
        } else {
            this.setState({ startDate: selectedDay }, () => {
                sessionStorage.setItem('startdate', this.state.startDate.toString());
            })
            const dayAfter = new Date(selectedDay.getTime());
            dayAfter.setDate(dayAfter.getDate() + 1);
            this.setState({ endDate: dayAfter }, () => {
                sessionStorage.setItem('enddate', this.state.endDate.toString());
                this.props.updateFilter("dates", { startDate: this.state.startDate, endDate: this.state.endDate });
            })
        }
    }

    handleEndDayChange(selectedDay) {
        const hours = this.state.endDate.getHours();
        const minutes = this.state.endDate.getMinutes();

        selectedDay.setHours(hours);
        selectedDay.setMinutes(minutes);

        if (selectedDay < this.state.startDate) {
            this.setState({ startDate: selectedDay }), () => {
                sessionStorage.setItem('startdate', this.state.startDate.toString());
            };
            const dayAfter = new Date(selectedDay.getTime());
            dayAfter.setDate(dayAfter.getDate() + 1);
            this.setState({ endDate: dayAfter }, () => {
                sessionStorage.setItem('enddate', this.state.endDate.toString());
                this.props.updateFilter("dates", this.state);
            })
        } else {
            this.setState({ endDate: selectedDay }, () => {
                sessionStorage.setItem('enddate', this.state.endDate.toString());
                this.props.updateFilter("dates", { startDate: this.state.startDate, endDate: this.state.endDate });
            });
        }
    }

    handleTimeSelect(selectedDate, e) {
        const time = parseTime(e.target.value);
        const hours = time[0];
        const minutes = time[1];
        let newDate;

        if (selectedDate === 'from') {
            newDate = this.state.startDate
            newDate.setHours(hours, minutes);
            this.setState({ startDate: newDate }, () => {
                sessionStorage.setItem('startdate', this.state.startDate.toString());
                this.props.updateFilter("dates", { startDate: this.state.startDate, endDate:this.state.endDate });
            })
        } else {
            newDate = this.state.endDate
            newDate.setHours(hours, minutes);
            this.setState({ endDate: newDate }, () => {
                sessionStorage.setItem('enddate', this.state.endDate.toString());
                this.props.updateFilter("dates", { startDate: this.state.startDate, endDate: this.state.endDate });
            })
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

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        const disabled = {
            before: tomorrow
        }
        const selectedDays = {
            from: this.state.startDate,
            to: this.state.endDate
        }
  
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
                                    <li><i className="fas fa-gas-pump fa-lg"></i>Gas {this.props.car.hp > 300 ? '(Premium)' : ""}</li> :
                                        <li><i className="fas fa-charging-station fa-lg"></i>Electric</li>
                                }
                                <li><i className="fas fa-tachometer-alt fa-lg"></i>{`${this.props.car.hp} HP`}</li>
                                <li><i className="fas fa-car-side fa-lg"></i>{`${this.props.car.numDoors} doors`}</li>
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
                        <div className="price-estimate">{`$${this.props.car.price * daysBetween(this.state.startDate, this.state.endDate)} est. total + fees`}<i className="far fa-question-circle"></i></div>
                        <form className="show-booking-form" onSubmit={this.handleSubmit}> 
                            <div className="show-booking-start">
                            <p>Trip start</p>
                                <div>
                                    <div className="show-booking-start-datepicker">
                                        <DayPickerInput
                                            value={formatDate(this.state.startDate)}
                                            dayPickerProps={{
                                                disabledDays: disabled,
                                                selectedDays: selectedDays
                                            }}
                                            onDayChange={this.handleStartDayChange}
                                        />
                                        <i className="fas fa-angle-down"></i>
                                    </div>
                                    <div className="show-booking-start-timeselect">
                                        <label htmlFor="show-booking-start-time"></label>
                                        <select id="show-booking-start-time" value={defaultTime(this.state.startDate)} onChange={(e) => this.handleTimeSelect('from', e)}>
                                            {times.map((time, idx) => {
                                                return <option value={time} key={idx}>{time}</option>
                                            })}
                                        </select>
                                        <i className="fas fa-angle-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="show-booking-end">
                                <p>Trip end</p>
                                <div>
                                    <div className="show-booking-end-datepicker">
                                        <DayPickerInput
                                            value={formatDate(this.state.endDate)}
                                            dayPickerProps={{
                                                disabledDays: disabled,
                                                selectedDays: selectedDays
                                            }}
                                            onDayChange={this.handleEndDayChange}
                                        />
                                        <i className="fas fa-angle-down"></i>
                                    </div>
                                    <div className="show-booking-end-timeselect">
                                        <label htmlFor="show-booking-end-time"></label>
                                        <select id="show-booking-end-time" value={defaultTime(this.state.endDate)} onChange={(e) => this.handleTimeSelect('until', e)}>
                                            {times.map((time, idx) => {
                                                return <option value={time} key={idx}>{time}</option>
                                            })}
                                        </select>
                                        <i className="fas fa-angle-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="show-booking-location">
                                <label htmlFor="pickup-return-location">Pickup & return location</label>
                                <div>
                                    <select id="pickup-return-location">
                                        <option value="">New York, NY 10018</option>
                                    </select>
                                    <i className="fas fa-angle-down"></i>
                                </div>
                            </div>
                            <button>Continue</button>
                        </form>
                        <div className="free-cancellation">
                            <i className="far fa-thumbs-up"></i>
                            <div>
                                <div>Free Cancellation</div>
                                <p>{`Full refund before ${cancellationDate(this.state.startDate)}`}</p>
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
                            <div>Insurance via Liberty Mutual <i className="far fa-question-circle"></i></div>
                        </div>
                        <button><i className="far fa-heart"></i>Add to favorites</button>
                        <div className="booking-form-icons">
                            <div><i className="fab fa-github-square fa-lg"></i></div>
                            <div><i className="fab fa-linkedin fa-lg"></i></div>
                            <div><i className="fab fa-twitter-square fa-lg"></i></div>
                            <div><i className="fas fa-envelope-square fa-lg"></i></div>
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