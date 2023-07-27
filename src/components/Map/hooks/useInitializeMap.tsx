import { calculateZoom, getCenterFromAllCoordinates } from 'helpers';
import { useEffect, useRef } from 'react';
import { selectCoordinates, selectUserCoordinates } from 'store/selectors';
import { useAppSelector } from 'store/store';

export const useInitializeMap = () => {
  const coordinates = useAppSelector(selectCoordinates);
  const userCoordinates = useAppSelector(selectUserCoordinates);

  const mapRef = useRef<L.Map>(null);

  const center = getCenterFromAllCoordinates(coordinates, userCoordinates);
  const zoom = calculateZoom(coordinates);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.flyTo(center, zoom, {
        duration: 1,
      });
    }
  }, [center]);

  return {
    center,
    zoom,
    mapRef,
    coordinates,
    userCoordinates,
  };
};
