import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    let {bookingKey} = useParams();
    return (
        <div>
            <h1>{bookingKey}</h1>
        </div>
    );
};

export default Booking;