import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom'
import { Map, TileLayer } from 'react-leaflet';


//components
import Markers from './Markers'


//lealeft style
import 'leaflet/dist/leaflet.css'

const Geolocation = ({jobs, coordinates}) => {
  const [state, setstate] = useState({
    currentLocation: {lat:'0', lng:'0'},
    zoom:13,
    allJobs:[],
  })
  
  const location = useLocation()

  useEffect(()=>{
    if(location.state.latitude && location.state.longitude)
    {
      const currentLocation = {
        lat: coordinates.jobLatitude === 0 ? location.state.latitude : coordinates.jobLatitude,
        lng: coordinates.jobLongitude === 0 ? location.state.longitude : coordinates.jobLongitude
      }
      const myLocation = {
        assigned_to: "Logged user",
        created_at: "",
        date: "",
        description: "",
        id: 0,
        image: "",
        latitude: currentLocation.lat,
        longitude: currentLocation.lng,
        status: "",
        title: "My location",
        updated_at: ""
      }
      const allJobs = [...jobs, myLocation]

      setstate({...state, currentLocation, allJobs})

    }
  },[jobs, coordinates])

  return (
    <Map center={state.currentLocation} zoom={state.zoom}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers jobs={state.allJobs}/>
    </Map>
  );
}

export default Geolocation