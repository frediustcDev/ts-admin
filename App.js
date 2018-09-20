import React, { Component } from "react";
import { Font } from "expo";
import LoadingScreen from "./src/components/LoadingScreen";
import Routes from "./src/routes/";
import { fonts } from "./src/tools";

export default class App extends Component {
  state = {
    isReady: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      ...fonts
    });

    this.setState({ isReady: true });
  }

  render() {
    return this.state.isReady ? <Routes /> : <LoadingScreen />;
  }
}
