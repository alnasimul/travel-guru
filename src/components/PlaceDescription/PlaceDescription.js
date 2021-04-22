import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PlaceDescription.css';

const PlaceDescription = (props) => {
    const { title, description, id } = props;
    console.log(props);
    return (

        <div className="aboutPlace">
            <h1>{title}</h1>
            <p>
                {description}
            </p>
            <p>
                {props.children}
            </p>
        </div>

    );
};

export default PlaceDescription;