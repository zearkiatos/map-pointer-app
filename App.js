import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Map from "./src/components/Map";
import AppModal from "./src/components/AppModal";
import Panel from "./src/components/Panel";

export default function App() {
  const [points, setPoints] = useState([]);
  const handleLongPress = ({ nativeEvent }) => {
    const newPoints = points.concat({
      coordinate: nativeEvent.coordinate,
    });
    setPoints(newPoints);
    console.log(points);
  };
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <AppModal visibility={true}>
        <Text>Hello World! 😄</Text>
      </AppModal>
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
