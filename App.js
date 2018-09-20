import React, { Component } from "react";
import { Font } from "expo";
import LoadingScreen from "./src/components/LoadingScreen";
import Routes from "./src/routes/";

export default class App extends Component {
  state = {
    isReady: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });

    this.setState({ isReady: true });
  }

  render() {
    return this.state.isReady ? <Routes /> : <LoadingScreen />;
  }
}
