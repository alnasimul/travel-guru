import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import './PlaceDescription.css';

const PlaceDescription = (props) => {
    const {title,shortDescription} = props;
    return (
      
            <div className="aboutPlace">
                <h1>{title}</h1>
                <p>
                  {shortDescription}
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </div>
        
    );
};

export default PlaceDescription;