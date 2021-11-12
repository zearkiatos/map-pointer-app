import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";
const Map = () => <MapView style={styles.map} />;

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});

export default Map;
