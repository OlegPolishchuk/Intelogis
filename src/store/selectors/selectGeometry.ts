import { RootState } from 'store/store';

export const selectGeometry = (state: RootState) => state.mapReducer.geometry;
