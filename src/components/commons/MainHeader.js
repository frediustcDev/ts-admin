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
  primaryColor
} from "../../tools";

const Btn = ({ press, name, type }) => (
  <Ripple
    onPress={press}
    style={{
      ...rnNoSpace,
      ...rnSquare(40),
      borderRadius: 40,
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
        ...rnSquare(40),
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
      <Header transparent style={{ backgroundColor: bgColor }}>
        <Left>
          <Btn
            type="Feather"
            name="user"
            press={() => this.props.navigation.navigate("account")}
          />
        </Left>
        <Body>
          <Title
            style={{ color: textDark, fontFamily: "ws_xBold", fontSize: 18 }}
          >
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
