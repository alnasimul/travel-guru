import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PlaceDescription.css';

const PlaceDescription = (props) => {
    const { title, shortDescription, id } = props;
    console.log(props);
    return (

        <div className="aboutPlace">
            <h1>{title}</h1>
            <p>
                {shortDescription}
            </p>
            <p>
                <Link to={"/booking/" + id}>
                    <Button>Booking</Button>
                </Link>
            </p>
        </div>

    );
};

export default PlaceDescription;