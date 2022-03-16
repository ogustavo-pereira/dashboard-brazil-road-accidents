// Packages
import React, {memo, useState, useCallback, ReactElement} from 'react';
import {
  GoogleMap as GoogleMapApi,
  useJsApiLoader,
} from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: -15.235004,
  lng: -51.92528,
};

/**
 * Map display component
 * @return {ReactElement | null}
 */
function GoogleMap(): ReactElement | null {
  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: String(import.meta.env.VITE_GOOGLE_MAPS_API_KEY),
  });

  const [, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMapApi
      mapContainerStyle={containerStyle}
      center={center}
      zoom={4}
      onLoad={onLoad}
      onUnmount={onUnmount}
    ></GoogleMapApi>
  ) : null;
}

export default memo(GoogleMap);
