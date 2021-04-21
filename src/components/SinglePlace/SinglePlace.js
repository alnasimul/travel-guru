import React from 'react';
import './SinglePlace.css'

const SinglePlace = (props) => {
    const {placeName,image,key} = props.location;
    return (
        <div 
        onClick={ () => props.handleClick(props.location)} 
        className={props.activeClass}>
            <img src={image} alt=""/>
            <h3>
                <span> {placeName} </span>
            </h3>
        </div>
   
    );
};

export default SinglePlace;