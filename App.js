import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
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

  const handleSubmit = () => {
    const newPoint = {
      coordinate: point, name
    };

    setPoints(points.concat(newPoint));
    setVisibility(false);
    setName('');
  }

  const handleCancel = () => {
    setPoint({});
    setVisibility(false);
    setName('');
  }

  console.log(points);

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <AppModal visibility={visibility}>
        <Input title="Name" placeholder="Name of the point" onChangeText={handleChangeText} />
        <View style={styles.buttonsContainer}>
          <Button style={styles.button} title="Accept" onPress={handleSubmit} />
          <Button style={styles.button} title="Cancel" onPress={handleCancel} />
        </View>
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
