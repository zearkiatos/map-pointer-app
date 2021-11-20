import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
const Map = ({ onLongPress, points }) => (
  <MapView style={styles.map} onLongPress={onLongPress}>
    {points.map(point => (
      <Marker
        key={point.name}
        coordinate={point.coordinate}
        title={point.name}
      />
    ))}
  </MapView>
);

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get("window").height - 150,
    width: Dimensions.get("window").width,
  },
});

export default Map;
