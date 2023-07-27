import { calculateZoom, getCenterFromAllCoordinates } from 'helpers';
import { useEffect, useRef } from 'react';
import { selectCoordinates } from 'store/selectors';
import { useAppSelector } from 'store/store';

export const useInitializeMap = () => {
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

  return {
    center,
    zoom,
    mapRef,
    coordinates,
  };
};
