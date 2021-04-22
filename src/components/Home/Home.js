import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import SinglePlace from '../SinglePlace/SinglePlace'
import travelData from '../../fakeData/travelData';
import PlaceDescription from '../PlaceDescription/PlaceDescription';
import './Home.css';
//import Slider from "react-slick";


// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@primer/octicons-react';



// Import Swiper styles
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';


// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

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

    // const settings = {
    //     dots: false,
    //     arrows:true,
    //     centerMode: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     className: 'slides',
    //     autoplay:true,
    // };

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
                            description={loadedLocation.key ?
                                loadedLocation.shortDescp
                                : 'The name of Sajek Valley came from the Sajek River that originates from Karnafuli river...'}
                            key={loadedLocation.key}

                        >
                            <Link to={loadedLocation.key ? "/booking/" +  loadedLocation.key : "/booking/SJKS001" }>
                                <Button>Booking <ArrowRightIcon size={17}/></Button>
                            </Link>
                        </PlaceDescription>
                    </div>
                </Col>
                <Col className='' md={8}>

                    <Swiper
                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            // when window width is >= 480px
                            480: {
                                slidesPerView: 3,
                                spaceBetween: 10
                            },
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            }
                        }}

                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {
                            locations.map(location => (
                                <SwiperSlide key={location.key} >

                                    <SinglePlace
                                        activeClass={
                                            loadedLocation.key === location.key
                                                ? 'single-place active'
                                                : 'single-place '
                                        }
                                        handleClick={handleClick}
                                        location={location}
                                        key={location.key}
                                    ></SinglePlace>
                                </SwiperSlide>
                            ))
                        }
                            ...
                         </Swiper>


                    {/* <Slider {...settings}>
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
                            </Slider> */}
                </Col>
            </Row>
        </div>


    );
};

export default Home;