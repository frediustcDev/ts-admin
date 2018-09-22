import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container } from "native-base";
import MainHeader from "../components/commons/MainHeader";

class Events extends Component {
  state = {};

  render() {
    const {} = style;

    return (
      <Container>
        <MainHeader title="Events" />
      </Container>
    );
  }
}

export default Events;

const style = StyleSheet.create({});
