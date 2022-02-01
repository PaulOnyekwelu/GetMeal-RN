import { mocks } from "./mock";

export const restaurantService = (location = "37.7749295,-122.4194155") => {
  const restaurants = mocks[location];
  return new Promise((resolve, reject) => {
    if (!restaurants) reject("Restaurants not found");
    resolve(restaurants);
  });
};
