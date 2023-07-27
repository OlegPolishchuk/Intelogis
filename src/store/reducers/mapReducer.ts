import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { baseRoutes } from 'data/data';
import { LatLngExpression } from 'leaflet';
import { Coordinates } from 'models/Route';

export interface BaseRoute {
  name: string;
  waypoints: number[][];
}

export type Nullable<T> = T | null;

interface InitialState {
  baseRoutes: BaseRoute[];
  selectedRoute: Nullable<BaseRoute>;
  coordinates: Coordinates[];
  userCoordinates: LatLngExpression;
}

export const DEFAULT_COORDINATES = { lat: 59.93863, lng: 30.31413 };

const initialState: InitialState = {
  baseRoutes,
  selectedRoute: null,
  coordinates: [],
  userCoordinates: DEFAULT_COORDINATES,
};

const mapSlice = createSlice({
  name: 'mapReducer',
  initialState,
  reducers: {
    setSelectedRoute: (state, action: PayloadAction<{ route: Nullable<BaseRoute> }>) => {
      state.selectedRoute = action.payload.route;
    },

    setCoordinates: (state, action: PayloadAction<{ coordinates: Coordinates[] }>) => {
      state.coordinates = action.payload.coordinates;
    },

    setUserCoordinated: (state, action: PayloadAction<{ coordinates: LatLngExpression }>) => {
      state.userCoordinates = action.payload.coordinates;
    },
  },
});

export const { reducer: mapReducer, actions: mapActions } = mapSlice;

export const fetchRoutesAction = createAction<Nullable<BaseRoute>>('mapReducer/FETCH_ROUTES');
