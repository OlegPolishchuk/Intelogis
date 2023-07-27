import 'leaflet/dist/leaflet.css';

import { calculateZoom } from 'helpers';
import { getCenterFromAllCoordinates } from 'helpers/getCenterFromAllCoordinates';
import { LatLngExpression } from 'leaflet';
import { useEffect, useRef } from 'react';
import { MapContainer, Marker, Polyline, TileLayer, Tooltip } from 'react-leaflet';
import { selectCoordinates } from 'store/selectors';
import { useAppSelector } from 'store/store';

export const DEFAULT_COORDINATED = { lat: 59.93863, lng: 30.31413 };

export const Map = () => {
  const coordinates = useAppSelector(selectCoordinates);

  const mapRef = useRef<L.Map>(null);

  const center = getCenterFromAllCoordinates(coordinates);
  const zoom = calculateZoom(coordinates);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.flyTo(center, zoom, {
        duration: 1,
      });
    }
  }, [center]);

  return (
    <MapContainer id={'map'} center={center} zoom={zoom} scrollWheelZoom={false} ref={mapRef}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={DEFAULT_COORDINATED} />

      <Marker position={center}>
        <Tooltip permanent>
          Center:
          <p>Lat: {center.lat}</p>
          <p>Lng: {center.lng}</p>
        </Tooltip>
      </Marker>

      <Polyline positions={coordinates as LatLngExpression[]} />
    </MapContainer>
  );
};
