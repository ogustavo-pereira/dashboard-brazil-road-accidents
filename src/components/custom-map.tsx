// Packages
import React, {
  memo,
  useState,
  useCallback,
  ReactElement,
  useEffect,
} from 'react';
import {
  MapContainer as LeafletMap,
  TileLayer,
  CircleMarker,
  Popup,
} from 'react-leaflet';

// Services
import { getAllMarkerPositions } from '../service/api';

// Types
import { Positions } from '../types';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

/**
 * Component for displaying the world map with markings
 * @return {ReactElement}
 */
function CustomMap(): ReactElement {
  const [isLoading, setLoading] = useState(false);
  console.log('render');
  const [makers, setMarkers] = useState<Array<Positions> | null>(null);

  useEffect(() => {
    const getMarkers = async () => {
      setLoading(true);
      const newMarkers = await getAllMarkerPositions();

      if (newMarkers.length) {
        setMarkers(newMarkers);
      }

      setLoading(false);
    };

    if (makers == null) {
      getMarkers();
    }
  }, []);

  return !isLoading ? (
    <LeafletMap center={[-15.235004, -51.92528]} zoom={4}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {makers?.map(({ lat, lng }, key) =>
        typeof lat == 'number' && typeof lng == 'number' ? (
          <CircleMarker
            key={key}
            radius={1}
            center={[lat, lng]}
            pathOptions={{ color: 'red' }}
          />
        ) : null
      )}
    </LeafletMap>
  ) : (
    <></>
  );
}

export default memo(CustomMap);
