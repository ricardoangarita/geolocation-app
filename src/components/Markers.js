import React from 'react';
import { Marker } from 'react-leaflet';
import { IconLocation } from './IconLocation';

//component
import MarkerPopup from './MarkerPopup';

const Markers = (props) => {
  const { jobs } = props;
  const markers = jobs.map((job) => (
    <Marker key={job.id} position={{lat:job.latitude, lng:job.longitude}} icon={IconLocation}>
      <MarkerPopup job={job} />
    </Marker>
  ));
  return markers;
};

export default Markers;
