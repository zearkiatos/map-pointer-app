import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Map from "./src/components/Map";
import AppModal from "./src/components/AppModal";
import Panel from "./src/components/Panel";
import Input from './src/components/Input';

export default function App() {
  const [points, setPoints] = useState([]);
  const [point, setPoint] = useState({});
  const [name, setName] = useState('');
  const [visibility, setVisibility] = useState(false);
  const handleLongPress = ({ nativeEvent }) => {
    setPoint(nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleChangeText = text => {
    setName(text);
  };

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <AppModal visibility={visibility}>
        <Input title="Name" placeholder="Name of the point" onChangeText={handleChangeText} />
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
