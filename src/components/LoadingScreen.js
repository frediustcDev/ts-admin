import React, { Component } from "react";
import { View, Text, Spinner } from "native-base";
import { rnFill, rnSetPosition, primaryColor } from "../tools";

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ ...rnFill, ...rnSetPosition() }}>
        <Spinner size={40} color={primaryColor} />
      </View>
    );
  }
}

export default LoadingScreen;
