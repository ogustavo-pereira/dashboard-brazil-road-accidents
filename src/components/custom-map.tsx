// Packages
import  {
  memo,
  useState,
  ReactElement,
  useEffect,
} from 'react';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer as LeafletMap,
  TileLayer,
  CircleMarker,
} from 'react-leaflet';

// Services
import { getAllMarkerPositions } from '../service/api';

// Types
import { Positions } from '../types';

/**
 * Component for displaying the world map with markings
 * @return {ReactElement}
 */
function CustomMap(): ReactElement {
  const [isLoading, setLoading] = useState(false);
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
    <LeafletMap center={[-15.235004, -51.92528]} zoom={4} style={{ height: '100vh' }}>
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
