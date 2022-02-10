import { View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Map } from "./mapStyle";
import MapSearch from "./components/MapSearch";
import { locationContext } from "../../services/location/context";
import { restaurantContext } from "../../services/restaurant/context";
import { Callout, Marker } from "react-native-maps";
import MapCallout from "./components/MapCallout";
import { StackScreenProps } from "@react-navigation/stack";
import { rootNavigationParamList } from "../../infras/navigations/app";
import { restaurantParamList } from "../../infras/navigations/restaurants";

const defaultLocation = {
  lat: 0,
  lng: 0,
  viewport: undefined,
};

type props = StackScreenProps<restaurantParamList, "RestaurantDetails">;

const MapScreen = ({ navigation }: props) => {
  const { location } = useContext(locationContext);
  const { restaurants } = useContext(restaurantContext);
  const { lat, lng, viewport } = location || defaultLocation;
  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    if (viewport) {
      const delta = viewport?.northeast?.lat - viewport?.southwest?.lat;
      if (delta) setLatDelta(delta);
    }
  }, [JSON.stringify(viewport)]);

  return (
    <View>
      <MapSearch />
      {location && (
        <Map
          region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02,
          }}
        >
          {restaurants &&
            restaurants.map((restaurant, index) => {
              return (
                <Marker
                  key={`${restaurant.geometry.location.lat}-${index}`}
                  coordinate={{
                    latitude: restaurant.geometry.location.lat,
                    longitude: restaurant.geometry.location.lng,
                  }}
                >
                  <Callout
                    style={{ width: 170, height: 170 }}
                    onPress={() =>
                      navigation.navigate("RestaurantDetails", { restaurant })
                    }
                  >
                    <MapCallout restaurant={restaurant} />
                  </Callout>
                </Marker>
              );
            })}
        </Map>
      )}
    </View>
  );
};

export default MapScreen;
