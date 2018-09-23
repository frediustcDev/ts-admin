import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Content, Text, H1, H3, View, Icon } from "native-base";
import Carousel from "react-native-snap-carousel";
import MainHeader from "../components/commons/MainHeader";
import {
  rnSetPadding,
  BASE_SPACE,
  textLight,
  TITLE_SPACE,
  SLIDER_WIDTH,
  SLIDER_ITEM_WIDTH,
  rnFill,
  linkActive,
  textColor,
  STAR_COLOR,
  rnSetPosition,
  textDark,
  bgLight
} from "../tools";
import HomeSection from "../components/Home/HomeSection";
import PopularEvents from "../components/Home/PopularEvents";

class Home extends Component {
  state = {
    data: [
      {
        id: "1",
        name: "Concert DJ Arafat",
        location: "Abidjan",
        date: "21 Sept 2018",
        hour: "10:00",
        color: "red",
        basePrice: 20,
        rank: 0.1,
        category: "Music"
      },
      {
        id: "2",
        name: "Abidjan Mousse Saison 2",
        location: "Abidjan",
        date: "21 Sept 2018",
        hour: "10:00",
        color: "green",
        basePrice: 30,
        rank: 3.6,
        category: "Party"
      },
      {
        id: "3",
        name: "Festival des grillades",
        location: "Abidjan",
        date: "21 Sept 2018",
        hour: "10:00",
        color: "blue",
        basePrice: 10,
        rank: 2,
        category: "Festival"
      }
    ]
  };

  render() {
    const {} = style;
    const { data } = this.state;

    return (
      <Container>
        <MainHeader title="Discovery" />
        <Content
          style={{
            marginTop: BASE_SPACE
          }}
        >
          <PopularEvents data={data} />
        </Content>
      </Container>
    );
  }
}

export default Home;

const style = StyleSheet.create({});
