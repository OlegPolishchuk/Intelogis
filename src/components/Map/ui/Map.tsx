import 'leaflet/dist/leaflet.css';

import { LatLngExpression } from 'leaflet';
import { MapContainer, Marker, Polyline, TileLayer, Tooltip } from 'react-leaflet';

import { useInitializeMap } from '../hooks/useInitializeMap';

export const Map = () => {
  const { mapRef, zoom, center, coordinates, userCoordinates } = useInitializeMap();

  return (
    <MapContainer id={'map'} center={center} zoom={zoom} scrollWheelZoom={false} ref={mapRef}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {!coordinates.length && <Marker position={userCoordinates} />}

      {coordinates.map((point, index) => (
        <Marker position={point as LatLngExpression} key={index}>
          <Tooltip>
            Point:
            <p>Lat: {+point[0]}</p>
            <p>Lng: {+point[1]}</p>
          </Tooltip>
        </Marker>
      ))}

      <Polyline positions={coordinates as LatLngExpression[]} />
    </MapContainer>
  );
};
