import { LatLngBoundsExpression, LatLngExpression } from 'leaflet';
import L from 'leaflet';
import { MapContainer, Marker, Polyline, TileLayer, Tooltip } from 'react-leaflet';

import markerIcon from '../../../assets/mapIcons/marker-icon.png';
import markerIcon2x from '../../../assets/mapIcons/marker-icon-2x.png';
import markerShadowIcon from '../../../assets/mapIcons/marker-shadow.png';
import { useInitializeMap } from '../hooks/useInitializeMap';

const defaultIconOptions = L.Icon.Default.prototype.options;

const icon = L.icon({
  ...defaultIconOptions,
  iconUrl: markerIcon,
  shadowUrl: markerShadowIcon,
  iconRetinaUrl: markerIcon2x,
});

export const Map = () => {
  const { mapRef, zoom, center, coordinates, userCoordinates } = useInitializeMap();

  return (
    <MapContainer
      id={'map'}
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      ref={mapRef}
      bounds={coordinates as LatLngBoundsExpression}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {!coordinates.length && <Marker position={userCoordinates} icon={icon} />}

      {coordinates.map((point, index) => (
        <Marker position={point as LatLngExpression} key={index} icon={icon}>
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
