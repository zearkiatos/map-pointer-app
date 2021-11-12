import React from "react";
import { StyleSheet, View } from "react-native";
import Map from "./src/components/Map";
import AppModal from "./src/components/AppModal";
import Panel from "./src/components/Panel";

export default function App() {
  const handleLongPress = ({ nativeEvent }) => {
    console.log(nativeEvent);
  };
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <AppModal />
      <Panel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
