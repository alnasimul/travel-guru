import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import SinglePlace from '../SinglePlace/SinglePlace'
import travelData from '../../fakeData/travelData';
import PlaceDescription from '../PlaceDescription/PlaceDescription';
import './Home.css';
import Slider from "react-slick";


const Home = () => {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        const loadedLocations = travelData;
        setLocations(loadedLocations);
    }, [])
    const [loadedLocation, setLoadedLocations] = useState({});

    const handleClick = location => {
        const selectedLocation = locations.find(singleLocation => location.key === singleLocation.key);
        setLoadedLocations(selectedLocation);
    }
   
    const settings = {
        dots: false,
        arrows:true,
        centerMode: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: 'slides',
        autoplay:true,
    };

    return (
        <div style={{ overflow: 'hidden', marginLeft: '80px' }}>
            <Row>
                <Col md={4}>
                    <div style={{
                        marginLeft: '4px',
                        marginTop: '0',
                    }}>
                        <PlaceDescription
                            title={loadedLocation.key ? loadedLocation.placeName : 'Sajek Valley'}
                            shortDescription={loadedLocation.key ?
                                loadedLocation.shortDescp
                                : 'The name of Sajek Valley came from the Sajek River that originates from Karnafuli river...'}
                            id={loadedLocation.key ? loadedLocation.key : "SJKS001"}
                            key={loadedLocation.key}

                        >
                     </PlaceDescription>
                    </div>
                </Col>
                <Col className='' md={8}>
                    <Slider {...settings}>
                        {locations.map((location) => (
                            <SinglePlace
                                activeClass={
                                    loadedLocation.key === location.key
                                        ? 'single-place active'
                                        : 'single-place'
                                }
                                handleClick={handleClick}
                                location={location}
                                key={location.key}
                            ></SinglePlace>
                        ))}
                            </Slider>
                    </Col>
            </Row>
        </div>


    );
};

export default Home;