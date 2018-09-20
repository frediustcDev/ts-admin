import React, { Component } from "react";
import { View, Text, Spinner } from "native-base";
import { rnFill, rnSetPosition } from "../tools";

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ ...rnFill, ...rnSetPosition() }}>
        <Spinner size={60} />
      </View>
    );
  }
}

export default LoadingScreen;
