export const formatPointsToOSRM = (coordinates: number[][]) => {
  return coordinates
    .map((c) => {
      const reversed = [...c].reverse();
      return reversed.join(',');
    })
    .join(';');
};
