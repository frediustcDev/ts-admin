import React, { Component } from "react";
import { View, Text, Spinner } from "native-base";
import { rnFill, rnSetPosition } from "./utils";

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ ...rnFill, ...rnSetPosition }}>
        <Spinner size={60} />
        <Text> loading... </Text>
      </View>
    );
  }
}

export default LoadingScreen;
