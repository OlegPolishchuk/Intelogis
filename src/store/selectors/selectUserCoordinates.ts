import { RootState } from 'store/store';

export const selectUserCoordinates = (state: RootState) => state.mapReducer.userCoordinates;
