import React from 'react';
import { StarFillIcon } from '@primer/octicons-react';
import './HotelDetails.css';

const HotelDetails = (props) => {
    const {
        name,
        guests,
        bedrooms,
        beds,
        baths,
        facilities,
        rating,
        reviewed,
        shift,
        price,
        totalPrice,
        image,
    } = props.hotel;
    return (
        <div className='hotelDetails'>
            <div className='look'>
                <img src={image} alt='' />
            </div>
            <div className='hotel-description'>
                <h4>{name}</h4>
                <p className='hotel-specif'>
                    {guests}guests {bedrooms}bedrooms {beds}beds {baths}baths
                </p>
                <p>{facilities}</p>
                <p className='space-between'>
                    <span className='rating'>
                        <StarFillIcon size={20} />
                        {rating} <span className='review'>({reviewed})</span>
                    </span>
                    <span className='pricing'>
                        <strong>${price}/</strong>
                        {shift}
                        <span className='tota-pi'>${totalPrice} total</span>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default HotelDetails;