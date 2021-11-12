import React from "react";
import { StyleSheet, View } from "react-native";
import Map from "./src/components/Map";
import AppModal from "./src/components/Modal";

export default function App() {
  return (
    <View style={styles.container}>
      <Map />
      <AppModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
