import { FetchRoutesResponse } from 'services/types';

const BASE_URL = 'https://router.project-osrm.org/route/v1';
const PROFILE = 'driving';

export const fetchRoutes = async (getPoints: string) => {
  const res = await fetch(
    `${BASE_URL}/${PROFILE}/${getPoints}?overview=simplified&geometries=geojson`,
  );

  const data: FetchRoutesResponse = await res.json();

  return data.routes;
};
