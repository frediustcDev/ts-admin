import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Header, Right, Body, Title, Left, Button, Icon } from "native-base";
import Ripple from "react-native-material-ripple";
import {
  rnSquare,
  rnSetPosition,
  bgColor,
  bgLight,
  textDark,
  textColor,
  rnNoSpace,
  primaryColor,
  rnSetPadding,
  BASE_SPACE,
  HEADER_BTN
} from "../../tools";

const Btn = ({ press, name, type }) => (
  <Ripple
    onPress={press}
    style={{
      ...rnNoSpace,
      ...rnSquare(HEADER_BTN),
      borderRadius: HEADER_BTN,
      overflow: "hidden"
    }}
    rippleColor={primaryColor}
    rippleOpacity={0.5}
  >
    <Button
      transparent
      rounded
      style={{
        backgroundColor: bgLight,
        elevation: 0,
        ...rnSquare(HEADER_BTN),
        ...rnSetPosition(),
        ...rnNoSpace
      }}
    >
      <Icon
        type={type}
        name={name}
        style={{
          color: textColor,
          fontSize: 16,
          ...rnNoSpace
        }}
      />
    </Button>
  </Ripple>
);

class MainHeader extends Component {
  state = {};

  render() {
    return (
      <Header
        transparent
        style={{
          backgroundColor: bgColor,
          ...rnSetPadding(BASE_SPACE, "horizontal"),
          borderBottomWidth: 1,
          borderBottomColor: bgLight
        }}
      >
        <Left>
          <Btn
            type="Feather"
            name="user"
            press={() => this.props.navigation.navigate("account")}
          />
        </Left>
        <Body>
          <Title style={{ color: textDark, fontFamily: "ws" }}>
            {this.props.title || "Ticketing App"}
          </Title>
        </Body>
        <Right>
          <Btn
            type="Feather"
            name="search"
            press={() => this.props.navigation.navigate("search")}
          />
        </Right>
      </Header>
    );
  }
}

export default withNavigation(MainHeader);
