import polyline from '@mapbox/polyline';
import { PayloadAction } from '@reduxjs/toolkit';
import { formatPointsToOSRM } from 'helpers/formatPointsToOSRM';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchRoutes } from 'services/OSRM';
import { FetchRoutesResponse } from 'services/types';
import { BaseRoute, fetchRoutesAction, mapActions } from 'store/reducers';

export function* watcherRoutes(): Generator {
  yield takeLatest(fetchRoutesAction, workerFetchRoutes);
}

function* workerFetchRoutes(action: PayloadAction<BaseRoute>): Generator {
  try {
    const selectedRoute = action.payload;

    const coordinates = formatPointsToOSRM(selectedRoute.waypoints);

    const dataFromOSRM = yield call(() => fetchRoutes(coordinates));
    const { routes } = dataFromOSRM as FetchRoutesResponse;
    const { geometry } = routes[0];

    const decodedCoordinates = polyline.decode(geometry);

    yield put(mapActions.setCoordinates({ coordinates: decodedCoordinates }));
  } catch (e) {
    console.log('error', e);
  }
}
