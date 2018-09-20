import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { rnSquare, rnSetPosition } from "./src/components/utils";
import ici from "rn-style-utils";
export default class App extends React.Component {
  render() {
    console.log(ici);
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    ...rnSetPosition(null, null)
  },
  box: {
    backgroundColor: "red",
    margin: 10,
    ...rnSquare(100)
  }
});
