import React from 'react';
import { Popup } from 'react-leaflet';

const MarkerPopup = (props) => {
  const { title, image, latitude, longitude, assigned_to } = props.job;
  return (
    <Popup>
      <div className="marker-popup">
        <span className="market-title">Title: {title}</span>
        <span className="market-title">Assigned to: {assigned_to}</span>
        <img className="market-img" src={image} alt={title} />
        <span className="market-title">Lat: {latitude}</span>
        <span className="market-title">Lng: {longitude}</span>
      </div>
    </Popup>
  );
};

export default MarkerPopup;
