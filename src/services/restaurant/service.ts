import { mocks } from "./mock";

export const restaurantService = (location: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const restaurants = mocks[location];
    if (!restaurants) reject("Restaurants not found");
    else resolve(restaurants);
  });
};
