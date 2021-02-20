import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../splash/footer';
import { cancellationDate, checkoutDateFormat, checkoutTimeFormat, daysBetween } from '../../util/date_util';
import { makeModelFormat } from '../../util/car_util';  
import { createbooking } from '../../actions/booking_actions';

const BookingForm = (props) => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.id);
    const carId = props.match.params.carId;
    const car = useSelector(state => state.entities.cars[carId]);
    const host = useSelector(state => state.entities.users[car.ownerId]);
    const startDate = useSelector(state => state.ui.filters.dates.startDate);
    const endDate = useSelector(state => state.ui.filters.dates.endDate);
    const tripDays = daysBetween(startDate, endDate);
    const tripTotalPrice = ((car.price + 23.35) * tripDays).toFixed(2);
    const threeDayDiscount = tripDays >= 3 ? 27.80 : 0;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        dispatch(createbooking({ user_id : userId, car_id : carId, status: true, start_date: startDate, end_date: endDate }))
    }

    return (
        <>  
            <div className="checkout-border">
                <div className="checkout">
                    <h1>Checkout</h1>
                    <div className="free-cancellation">
                        <i className="far fa-thumbs-up"></i>
                        <div>
                            <p>{`Free cancellation before ${cancellationDate(startDate)}`}</p>
                            <p>If your plans change, we've got your back.</p>
                        </div>
                    </div>
                    <div className="checkout-info">
                        <form className="booking-form" onSubmit={handleSubmit}>
                            <div className="booking-form-extras">
                                <h2>Extras</h2>
                                <div className="booking-form-extras-convenience">
                                </div>
                                <div id="booking-form-extras-button">None</div>
                            </div>
                            <div className="booking-form-protection">
                                <h2>Protection plans</h2>
                                <div id="booking-form-protection-button">Minimum</div>
                            </div>
                            <div className="booking-form-payment">
                                <h2>Payment method</h2>
                                <div id="booking-form-payment-button">MasterCard 1234</div>
                            </div>
                            <div className="booking-form-insurance">
                                <h2>Your insurance info (optional)</h2>
                                <div id="booking-form-insurance-button">Add</div>
                            </div>
                            <p>{`You'll be able to message ${host.firstName} after checkout.`}</p>
                            <div className="booking-form-tos">
                                <input type="checkbox" id="tos" required/>
                                <label htmlFor="tos"><p>I agree to pay the total shown and to the</p><a>Turo terms of service</a><p>and</p><a>cancellation policy.</a></label>
                            </div>
                            <button>Book this trip</button>
                        </form>
                        <div className="trip-info">
                            <div className="trip-info-images">
                                <img src={`${car.photoURLs[0]}`}/>
                                <div>
                                    <div className="trip-info-images-user">
                                        <i className="far fa-user-circle fa-5x"></i>
                                    </div>
                                    <div className="trip-info-images-user-rating">5.0<i className="fas fa-star"></i></div>
                                </div>
                            </div>
                            <div className="trip-info-car">
                                <p>{`${host.firstName}'s`}</p>
                                <div className="trip-info-car-info">
                                    <p>{makeModelFormat(car.make, car.model)}</p>
                                    <p>{car.year}</p>
                                </div>
                                <div className="trip-info-car-rating">
                                    <p>5.0</p>
                                    <i className="fas fa-star fa-xs"></i>
                                    <p>(2 trips)</p>
                                </div>
                            </div>
                            <div className="trip-info-schedule">
                                <div className="trip-info-schedule-start">
                                    <p>{checkoutDateFormat(startDate)}</p>
                                    <p>{checkoutTimeFormat(startDate)}</p>
                                </div>
                                <div className="trip-info-schedule-icon"></div>
                                <div className="trip-info-schedule-end">
                                    <p>{checkoutDateFormat(endDate)}</p>
                                    <p>{checkoutTimeFormat(endDate)}</p>
                                </div>
                            </div>
                            <div className="trip-info-car-location">
                                <p>MEETING LOCATION</p>
                                <p><i className="fas fa-car"></i> New York, NY 10018</p>
                            </div>
                            <div className="trip-info-daily-estimate">
                                <div>
                                    <p>{`${tripDays}-day trip`}</p>
                                    <p>{`$${car.price}.00/day`}</p>
                                </div>
                                <div>
                                    <p>Trip fee</p>
                                    <p>$23.35/day</p>
                                </div>
                                <div>
                                    <p>Total per day</p>
                                    <p>{`$${car.price + 23.35}/day`}</p>
                                </div>
                            </div>
                            <div className="trip-info-price-breakdown">
                                <ul>
                                    <li>
                                        <p>Trip Total</p>
                                        <p>{`$${tripTotalPrice}`}</p>
                                    </li>
                                    <li>
                                        <p>Sales Tax</p>
                                        <p>{`$${(tripTotalPrice * .08875).toFixed(2)}`}</p>
                                    </li>
                                    <li className="break-down-miles">
                                        <p>{`${tripDays * 200} total miles`}</p>
                                        <p>FREE</p>
                                    </li>
                                    {tripDays >= 3 ? <li className="break-down-discount"><p>3+ day discount</p><p>-$27.80</p></li> : null}
                                    <li>
                                        <p>Total</p>
                                        <p>{`$${(tripTotalPrice * 1.08875).toFixed(2) - threeDayDiscount}`}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="trip-info-cancellation">
                                <i className="far fa-thumbs-up"></i>
                                <div>
                                    <p>Free cancellation</p>
                                    <p>{`Full refund before ${cancellationDate(startDate)} in local time of the car`}</p>
                                </div>
                            </div>
                            <div className="trip-info-promo">
                                <button className="add-promo">Add promo code</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}

export default BookingForm;