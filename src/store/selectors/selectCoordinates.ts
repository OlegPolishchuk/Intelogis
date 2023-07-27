import { RootState } from 'store/store';

export const selectCoordinates = (state: RootState) => state.mapReducer.coordinates;
