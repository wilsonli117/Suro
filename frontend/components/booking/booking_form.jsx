import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../splash/footer';
import { cancellationDate } from '../../util/date_util';
import { makeModelFormat } from '../../util/car_util';  

const BookingForm = (props) => {
    const carId = props.match.params.carId;
    const car = useSelector(state => state.entities.cars[carId]);
    const host = useSelector(state => state.entities.users[car.ownerId]);
    const startDate = useSelector(state => state.ui.filters.dates.startDate);
    const endDate = useSelector(state => state.ui.filters.dates.endDate);

    return (
        <>
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
                    <form className="booking-form">
                        <div className="booking-form-extras">
                            <h2>Extras</h2>
                            <div className="booking-form-extras-convenience">
                            </div>
                            <button id="booking-form-extras-button">None</button>
                        </div>
                        <div className="booking-form-protection">
                            <h2>Protection plans</h2>
                            <button id="booking-form-protection-button">Minimum</button>
                        </div>
                        <div className="booking-form-payment">
                            <h2>Payment method</h2>
                            <button id="booking-form-payment-button">MasterCard 1234</button>
                        </div>
                        <div className="booking-form-insurance">
                            <h2>Your insurance info (optional)</h2>
                            <button id="booking-form-insurance-button">Add</button>
                        </div>
                        <p>{`You'll be able to message ${host.firstName} after checkout`}</p>
                        <div className="booking-form-tos">
                            <input type="checkbox" id="tos" required/>
                            <label htmlFor="tos"><p>I agree to pay the total shown and to the</p><a>Turo terms of service</a><p>and</p><a>cancellation policy</a></label>
                        </div>
                        <button>Book this trip</button>
                    </form>
                    <div className="trip-info">
                        <div className="trip-info-images">
                            <img src={`${car.photoURLs[0]}`}/>
                            <div>
                                <i className="far fa-user-circle fa-2x"></i>
                                <div>5.0<i className="fas fa-star"></i></div>
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
                                <i className="fas fa-star"></i>
                                <p>(2 trips)</p>
                            </div>
                            <div className="trip-info-dates">

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