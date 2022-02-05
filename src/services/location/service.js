import { locationsMock } from "./mock";

export const locationRequest = (searchTerm) => {
  const location = locationsMock[searchTerm];
  return new Promise((resolve, reject) => {
    if (!location) reject("not found");
    resolve(location);
  });
};
