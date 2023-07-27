import { RootState } from 'store/store';

export const selectBaseRoutes = (state: RootState) => state.mapReducer.baseRoutes;
