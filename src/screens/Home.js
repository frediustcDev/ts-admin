import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { View, Text, Container } from "native-base";
import MainHeader from "../components/commons/MainHeader";

class Home extends Component {
  state = {};

  render() {
    const {} = style;

    return (
      <Container>
        <MainHeader />
      </Container>
    );
  }
}

export default Home;

const style = StyleSheet.create({});
