import React from "react";
import { StyleSheet, Button, View } from "react-native";

const Panel = ({onPressLeft, textLeft}) => {
  return (
    <View style={styles.panel}>
      <Button title={textLeft} onPress={onPressLeft} />
      <Button title="Show/Hide" />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Panel;
