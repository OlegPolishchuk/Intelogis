import { Route, Waypoints } from 'models/Route';

export interface FetchRoutesResponse {
  code: string;
  routes: Route[];
  waypoints: Waypoints[];
}
