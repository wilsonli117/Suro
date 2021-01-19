import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { cancellationDate } from '../../util/date_util';

const BookingForm = (props) => {
    const carId = props.match.params.carId;
    const car = useSelector(state => state.entities.cars[carId]);
    const startDate = useSelector(state => state.ui.filters.dates.startDate);
    const endDate = useSelector(state => state.ui.filters.dates.endDate);

    return (
        <>
        <div className="booking-form">
            <form className="">
                <h1>Checkout</h1>
                <div className="free-cancellation">
                    <i className="far fa-thumbs-up"></i>
                    <div>
                        <p>{`Free cancellation before ${cancellationDate(startDate)}`}</p>
                        <p>If your plans change, we've got your back.</p>
                    </div>
                </div>
                <div className="booking-form-extras">
                    
                </div>
                <div className="booking-form-protection">

                </div>

            </form>

            <div className="booking-form-trip-info">
                <img src={`${car.photoURLs[0]}`}/>
            </div>
        </div>
        </>
    )

}

export default BookingForm;