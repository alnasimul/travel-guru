import { CalendarIcon } from '@primer/octicons-react';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import travelData from '../../fakeData/travelData';
import PlaceDescription from '../PlaceDescription/PlaceDescription';
import './Booking.css';

const Booking = () => {
    let { bookingKey } = useParams();
    const [locations, setLocations] = useState(travelData);


    console.log(locations);

    const getBookingData = locations.find(location => location.key === bookingKey);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    console.log(getBookingData);

    return (
        <Container>
            <Row>
                <Col md={5}>
                    <PlaceDescription
                        title={getBookingData.placeName}
                        description={getBookingData.description}
                        key={getBookingData.key}
                    ></PlaceDescription>
                </Col>
                <Col md={7}>
                    <Form className="booking-form">
                        <Row>
                            <Col sm={12}>
                                <label htmlFor='origin'> Origin </label>
                                <input type='text' />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <label htmlFor='destination'>Destination</label>
                                <input
                                    type='text'
                                    value={getBookingData.placeName}
                                    readOnly
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <div className='dateIcon-wrap' >
                                    <label htmlFor='form'>From </label>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        dateFormat='d/MM'
                                        showDateMonthPicker
                                        showFullMonthYearPicker
                                        showTwoColumnMonthYearPicker
                                    />
                                    <CalendarIcon size={18} />
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className='dateIcon-wrap' >
                                    <label htmlFor='to'> To </label>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        dateFormat='d/MM'
                                        showDateMonthPicker
                                        showFullMonthYearPicker
                                        showTwoColumnMonthYearPicker
                                    />
                                    <CalendarIcon size={18} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Link to='/find_hotel'>
                                <Button> Start Booking </Button>
                            </Link>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );

};

export default Booking;