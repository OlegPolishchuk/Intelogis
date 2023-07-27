import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { baseRoutes } from 'data/data';
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
}

const initialState: InitialState = {
  baseRoutes,
  selectedRoute: null,
  coordinates: [],
};

const mapSlice = createSlice({
  name: 'mapReducer',
  initialState,
  reducers: {
    setSelectedRoute: (state, action: PayloadAction<{ route: Nullable<BaseRoute> }>) => {
      state.selectedRoute = action.payload.route;
    },

    setCoordinated: (state, action: PayloadAction<{ coordinates: Coordinates[] }>) => {
      state.coordinates = action.payload.coordinates;
    },
  },
});

export const { reducer: mapReducer, actions: mapActions } = mapSlice;

export const fetchRoutesAction = createAction<Nullable<BaseRoute>>('mapReducer/FETCH_ROUTES');
