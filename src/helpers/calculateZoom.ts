import { Coordinates } from 'models/Route';

const DEFAULT_MAP_WITH = 500;
const DEFAULT_ZOOM = 10;
export const calculateZoom = (coordinates: Coordinates[]) => {
  if (!coordinates || coordinates.length === 0) {
    return DEFAULT_ZOOM;
  }

  const mapContainer = document.getElementById('map');
  const mapWidth = mapContainer?.clientWidth || DEFAULT_MAP_WITH;

  console.log(mapWidth);

  const latitudes = coordinates.map((coord) => +coord[0]);
  const longitudes = coordinates.map((coord) => +coord[1]);

  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);
  const minLng = Math.min(...longitudes);
  const maxLng = Math.max(...longitudes);

  // Вычисляем разницу между минимальной и максимальной широтой и долготой
  const latDiff = maxLat - minLat;
  const lngDiff = maxLng - minLng;

  // Вычисляем zoom на основе размера экрана и разницы между минимальной и максимальной широтой или долготой
  const zoomLat = Math.floor(Math.log2((360 * (mapWidth / 256)) / latDiff));
  const zoomLng = Math.floor(Math.log2((360 * (mapWidth / 256)) / lngDiff));
  const zoom = Math.min(zoomLat, zoomLng);

  // Ограничиваем максимальным значением zoom (по умолчанию 18, но можно настроить по своему усмотрению)
  const maxZoom = 18;
  return Math.min(zoom, maxZoom);
};
