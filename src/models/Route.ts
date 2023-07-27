import { LatLngExpression } from 'leaflet';

interface Legs {
  summary: string;
  weight: number;
  duration: number;
  distance: number;
}

export interface Route {
  // geometry: Geometry;
  geometry: string;
  legs: Legs[];
  weight_name: string;
  weight: number;
  duration: number;
  distance: number;
}

export type Coordinates = LatLngExpression[] | [number, number];

export interface Waypoints {
  hint: string;
  distance: number;
  name: string;
  location: number[];
}
