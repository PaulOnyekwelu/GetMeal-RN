import { locationsMock } from "./mock";

export const locationRequest = (searchTerm) => {
  const location = locationsMock[searchTerm.toLowerCase()];
  return new Promise((resolve, reject) => {
    if (!location) reject("not found");
    resolve(location);
  });
};

export const getLatLng = (result) => {
  const { geometry } = result.results[0];
  if (geometry) {
    const { lat, lng } = geometry.location;
    return { lat, lng };
  }
};
