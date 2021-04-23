import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const [foundHotels, setFoundHotels] = useState([
    { lat: 21.395069617023523, lon: 92.02840423583986 },
    { lat: 21.35926293278742, lon: 92.03939056396486 },
    { lat: 21.339437610702294, lon: 92.03664398193361 },
    { lat: 21.445567710844283, lon: 91.99475860595705 },
    { lat: 21.414887406051825, lon: 91.97896575927736 },
    { lat: 21.393151623894703, lon: 92.0194778442383 },
  ]);

  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };
  const defaultCenter = {
    lat: 21.42575408475277,
    lng: 91.95046997070314,
  };

  return (
    <LoadScript googleMapsApiKey='AIzaSyCT1tWW7Rzb8ZtxtA-P-RuOR9g4C68zM9E'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        options={options}
        center={defaultCenter}
      />

      {foundHotels.map((marker) => (
        <Marker
          position={{ lat: marker.lat, lng: marker.lon }}
          key={marker.lat}
        />
      ))}
    </LoadScript>
  );
};

export default Map;