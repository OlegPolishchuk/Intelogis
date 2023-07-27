interface Legs {
  summary: string;
  weight: number;
  duration: number;
  distance: number;
}

export interface Route {
  geometry: Geometry;
  legs: Legs[];
  weight_name: string;
  weight: number;
  duration: number;
  distance: number;
}

export type Coordinates = number[];

export interface Geometry {
  coordinates: Coordinates[];
  type: string;
}

export interface Waypoints {
  hint: string;
  distance: number;
  name: string;
  location: number[];
}
