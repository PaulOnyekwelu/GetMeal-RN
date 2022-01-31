import { mocks } from "./mock";

export const restaurantService = (location = "37.7749295,-122.4194155") => {
  return mocks[location];
};
