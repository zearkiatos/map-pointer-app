import React, { useState, Fragment } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Map from "./src/components/Map";
import AppModal from "./src/components/AppModal";
import Panel from "./src/components/Panel";
import Input from "./src/components/Input";
import List from "./src/components/List";
import constants from "./src/constants";

export default function App() {
  const [points, setPoints] = useState([]);
  const [point, setPoint] = useState({});
  const [name, setName] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState(
    constants.ACTIONS.NEW_POINT
  );
  const [visibility, setVisibility] = useState(false);
  const [showPoints, setShowPoints] = useState(true);
  const toggleShowPoints = () => setShowPoints(!showPoints);
  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter(constants.ACTIONS.NEW_POINT);
    setPoint(nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleChangeText = (text) => {
    setName(text);
  };

  const handleSubmit = () => {
    const newPoint = {
      coordinate: point,
      name,
    };

    setPoints(points.concat(newPoint));
    setVisibility(false);
    setName("");
  };

  const handleClose = () => {
    setPoint({});
    setVisibility(false);
    setName("");
  };

  const handleList = () => {
    setVisibilityFilter(constants.ACTIONS.ALL_POINT);
    setVisibility(true);
  };

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} points={points} showPoints={showPoints} />
      <AppModal visibility={visibility}>
        {visibilityFilter === constants.ACTIONS.NEW_POINT ? (
          <View style={styles.form}>
            <Input
              title="Name"
              placeholder="Name of the point"
              onChangeText={handleChangeText}
            />
            <View style={styles.buttonsContainer}>
              <Button title="Accept" onPress={handleSubmit} />
              <Button title="Cancel" onPress={handleClose} />
            </View>
          </View>
        ) : (
          <List points={points} closeModal={handleClose} />
        )}
      </AppModal>
      <Panel
        onPressLeft={handleList}
        textLeft="List"
        onPressRight={toggleShowPoints}
        textRight="Show/Hide"
      />
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
  buttonsContainer: {
    flex: 1 / 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
    minHeight: 60,
  },
  form: {
    padding: 15,
    maxHeight: 120,
  },
});
