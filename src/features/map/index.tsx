import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Map } from "./mapStyle";
import MapSearch from "./components/MapSearch";
import { locationContext } from "../../services/location/context";
import { restaurantContext } from "../../services/restaurant/context";
import MapView, { Marker } from "react-native-maps";

const defaultLocation = {
  lat: 0,
  lng: 0,
  viewport: undefined,
};

const MapScreen = () => {
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
            restaurants.map((res) => {
              return (
                <Marker
                  coordinate={{
                    latitude: res.geometry.location.lat,
                    longitude: res.geometry.location.lng,
                  }}
                ></Marker>
              );
            })}
        </Map>
      )}
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
