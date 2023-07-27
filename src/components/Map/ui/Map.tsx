import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const MINSK_COORDINATES = { lat: 53.9, lng: 27.56667 };

export const Map = () => {
  return (
    <MapContainer center={MINSK_COORDINATES} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={MINSK_COORDINATES} />
    </MapContainer>
  );
};
