import { DEFAULT_COORDINATED } from 'components/Map';
import { Coordinates } from 'models/Route';

export const getCenterFromAllCoordinates = (coordinates: Coordinates[]) => {
  if (coordinates.length === 0) {
    return DEFAULT_COORDINATED;
  }

  const latList = coordinates.map((coord) => +coord[0]);
  const lngList = coordinates.map((coord) => +coord[1]);

  const maxLat = Math.max(...latList);
  const maxLng = Math.max(...lngList);
  const minLng = Math.min(...lngList);
  const minLat = Math.min(...latList);

  const centerLat = (minLat + maxLat) / 2;
  const centerLng = (minLng + maxLng) / 2;

  /*Построение прямоугольника (для отладки)*/
  // const maxLatPoint = coordinates.filter((coord) => +coord[0] === maxLat).flat();
  // const minLatPoint = coordinates.filter((coord) => +coord[0] === minLat).flat();
  //
  // const maxLngPoint = coordinates.filter((coord) => +coord[1] === maxLng).flat();
  // const minLngPoint = coordinates.filter((coord) => +coord[1] === minLng).flat();
  // const square = [
  //   [minLatPoint[0], minLngPoint[1]],
  //   [maxLatPoint[0], minLngPoint[1]],
  //   [maxLatPoint[0], maxLngPoint[1]],
  //   [minLatPoint[0], maxLngPoint[1]],
  // ];

  return { lat: centerLat, lng: centerLng };
};
