import L from 'leaflet'

import Icon from '../assets/icon.svg'

export const IconLocation = L.icon({
    iconUrl: Icon,
    iconRetinaUrl: Icon,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [40,40],
    className: 'leaflet-venue-icon'
})
