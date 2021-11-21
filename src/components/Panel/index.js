import React from "react";
import { StyleSheet, Button, View } from "react-native";

const Panel = ({ onPressLeft, textLeft, onPressRight, textRight }) => {
  return (
    <View style={styles.panel}>
      <Button title={textLeft} onPress={onPressLeft} />
      <Button title={textRight} onPress={onPressRight} />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Panel;
