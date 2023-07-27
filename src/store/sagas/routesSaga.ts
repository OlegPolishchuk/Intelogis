import { PayloadAction } from '@reduxjs/toolkit';
import { formatPointsToOSRM } from 'helpers/formatPointsToOSRM';
import { Geometry } from 'models/Route';
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchRoutes } from 'services/OSRM';
import { BaseRoute, fetchRoutesAction, mapActions } from 'store/reducers';

export function* watcherRoutes(): Generator {
  yield takeEvery(fetchRoutesAction, workerFetchRoutes);
}

function* workerFetchRoutes(action: PayloadAction<BaseRoute>): Generator {
  try {
    const selectedRoute = action.payload;

    const coordinates = formatPointsToOSRM(selectedRoute.waypoints);

    const dataFromOSRM = yield call(() => fetchRoutes(coordinates));
    const geometry = dataFromOSRM as Geometry;

    yield put(mapActions.setCoordinates({ geometry }));
  } catch (e) {
    console.log('error');
  }
}
