import { View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Map } from "./mapStyle";
import MapSearch from "./components/MapSearch";
import { locationContext } from "../../services/location/context";
import { restaurantContext } from "../../services/restaurant/context";
import { Callout, Marker } from "react-native-maps";
import MapCallout from "./components/MapCallout";

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
            restaurants.map((res, index) => {
              return (
                <Marker
                  key={`${res.geometry.location.lat}-${index}`}
                  coordinate={{
                    latitude: res.geometry.location.lat,
                    longitude: res.geometry.location.lng,
                  }}
                >
                  <Callout style={{width: 170, height: 170}}>
                    <MapCallout restaurant={res} />
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
