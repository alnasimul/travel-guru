import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import SinglePlace from '../SinglePlace/SinglePlace'
import travelData from '../../fakeData/travelData';
import PlaceDescription from '../PlaceDescription/PlaceDescription';

//import PlaceDescription from '../PlaceDescription/PlaceDescription';
import './Home.css'


const Home = () => {
    const [locations, setLocations] = useState([])
    useEffect(() => {
        const loadedLocations = travelData;
        setLocations(loadedLocations);
        // console.log(locations);
    }, [])
    const [loadedLocation, setLoadedLocations] = useState({});

    const handleClick = location => {
        const selectedLocation = locations.find(singleLocation => location.key === singleLocation.key);
        setLoadedLocations(selectedLocation);
    }
    //console.log(locations);
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     accessibility: false,
    //     navText: false,
    //   };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        accessibility: false,
        navText: false,
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
                            title={ loadedLocation.key ? loadedLocation.placeName : 'Sajek Valley' }
                            shortDescription={ loadedLocation.key ? 
                                loadedLocation.shortDescp 
                                : 'The name of Sajek Valley came from the Sajek River that originates from Karnafuli river...'}
                                key={loadedLocation.key}
                            
                        >
                        </PlaceDescription>
                    </div>
                </Col>
                <Col className='left-50' md={8}>
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