import { fork } from 'redux-saga/effects';
import { watcherRoutes } from 'store/sagas/routesSaga';

export function* rootSaga(): Generator {
  yield fork(watcherRoutes);
}
