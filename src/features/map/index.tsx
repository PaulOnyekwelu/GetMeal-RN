import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Map } from './mapStyle';
import MapSearch from './components/MapSearch';

const MapScreen = () => {
  return (
    <View>
      <MapSearch />
      <Map />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
