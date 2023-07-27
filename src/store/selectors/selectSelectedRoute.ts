import { RootState } from 'store/store';

export const selectSelectedRoute = (state: RootState) => state.mapReducer.selectedRoute;
