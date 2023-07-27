export const formatPointsToOSRM = (coordinates: number[][]) => {
  return coordinates.map((c) => c.join(',')).join(';');
};
