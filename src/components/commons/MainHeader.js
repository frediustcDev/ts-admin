import React, { Component } from "react";
import {
  View,
  Text,
  Header,
  Right,
  Body,
  Title,
  Left,
  Button,
  Icon
} from "native-base";
import { rnSquare, rnSetPosition } from "../../tools";

class MainHeader extends Component {
  state = {};

  render() {
    return (
      <Header transparent>
        <Left>
          <Button>
            <Icon type="Feather" name="search" />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: "#555" }}>Discovery</Title>
        </Body>
        <Right>
          <Button
            style={{
              backgroundColor: "#F0F0F0",
              ...rnSquare,
              ...rnSetPosition()
            }}
          >
            <Icon type="Feather" name="user" style={{ color: "#636363" }} />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default MainHeader;
