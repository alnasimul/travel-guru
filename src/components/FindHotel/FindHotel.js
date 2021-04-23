import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import hotelData from '../../fakeData/hotelData';
import Map from '../GoogleMap/GoogleMap';
import HotelDetails from '../HotelDetails/HotelDetails';
import './FindHotel.css'

const FindHotel = () => {
    const [hotels,setHotels] = useState([]);
    useEffect(() => {
        const loadedHotelData = hotelData;
        setHotels(loadedHotelData);
    },[])
    console.log(hotels);
    return (
      <Container className="findHotelContainer">
          <Row>
              <Col md={6}>
                  <div className="location-meta">
                        <p>252 stays Apr 13-17 3 guests</p>
                        <h3>Stay in Cox’s Bazar</h3>
                  </div>
                  {
                      hotels.map( hotel => <HotelDetails key={hotel.key} hotel={hotel}></HotelDetails>)
                  }
              </Col>
              <Col md={6}>
                <div className='mapStyler'>
                    <Map></Map>
                </div>
              </Col>
          </Row>
      </Container>
    );
};

export default FindHotel;