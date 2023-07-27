import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { baseRoutes } from 'data/data';
import { Geometry } from 'models/Route';

export interface BaseRoute {
  name: string;
  waypoints: number[][];
}

export type Nullable<T> = T | null;

interface InitialState {
  baseRoutes: BaseRoute[];
  selectedRoute: Nullable<BaseRoute>;
  geometry: Geometry;
}

const initialState: InitialState = {
  baseRoutes,
  selectedRoute: null,
  geometry: {
    type: '',
    coordinates: [],
  },
};

const mapSlice = createSlice({
  name: 'mapReducer',
  initialState,
  reducers: {
    setSelectedRoute: (state, action: PayloadAction<{ route: Nullable<BaseRoute> }>) => {
      state.selectedRoute = action.payload.route;
    },

    setCoordinates: (state, action: PayloadAction<{ geometry: Geometry }>) => {
      state.geometry = action.payload.geometry;
    },
  },
});

export const { reducer: mapReducer, actions: mapActions } = mapSlice;

export const fetchRoutesAction = createAction<Nullable<BaseRoute>>('mapReducer/FETCH_ROUTES');
