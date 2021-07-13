import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import offerProp from '../place-card/offer-prop';

function Map({offers}) {
  const icon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
  const mapRef = useRef(null);
  const city = [52.38333, 4.9];
  const map = useMap(mapRef, city);
  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: icon,
          })
          .addTo(map);
      });
    }
  }, [map, offers]);
  return <div id="map" style={{ height: '100%' }} ref={mapRef}></div>;
}
Map.propTypes = {
  ...offerProp,
};

export default Map;