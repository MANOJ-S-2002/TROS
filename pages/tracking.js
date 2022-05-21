import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
// import {GOOGLE_MAPS_APIKEY} from "GoogleMapKey"
import MapViewDirections from "react-native-maps-directions";

const Tracking = () => {
  const [state, setState] = useState({
    pickupCords: {
      latitude: 13.063327,
      longitude: 80.234334,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    droplocationCords: {
      latitude: 11.4102,
      longitude: 76.695,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });
  const { pickupCords, droplocationCords } = state;

  return (
    <View style={styles.container}>
      <MapView style={StyleSheet.absoluteFill} initialRegion={pickupCords}>
        <MapViewDirections
          origin={pickupCords}
          destination={droplocationCords}
          // apikey={GOOGLE_MAPS_APIKEY}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Tracking;
