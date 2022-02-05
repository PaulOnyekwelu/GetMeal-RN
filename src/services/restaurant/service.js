import { mocks } from "./mock";

export const restaurantService = (location) => {
  const restaurants = mocks[location];
  return new Promise((resolve, reject) => {
    if (!restaurants) reject("Restaurants not found");
    resolve(restaurants);
  });
};
