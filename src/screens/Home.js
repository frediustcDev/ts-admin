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
  bgLight,
  IMG_1,
  IMG_2,
  IMG_3
} from "../tools";
import HomeSection from "../components/Home/HomeSection";
import PopularEvents from "../components/Home/PopularEvents";
import Categories from "../components/Home/Categories";

class Home extends Component {
  state = {
    data: [
      {
        id: "1",
        image: IMG_1,
        name: "Concert DJ Arafat",
        location: "Abidjan",
        date: "21 Sept 2018",
        hour: "10:00",
        basePrice: 20,
        rank: 0.1,
        category: "Music"
      },
      {
        id: "2",
        image: IMG_2,
        name: "Abidjan Mousse II",
        location: "Abidjan",
        date: "21 Sept 2018",
        hour: "10:00",
        basePrice: 30,
        rank: 3.6,
        category: "Party"
      },
      {
        id: "3",
        image: IMG_3,
        name: "Festival des grillades",
        location: "Abidjan",
        date: "21 Sept 2018",
        hour: "10:00",
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
          showsVerticalScrollIndicator={false}
          style={{
            paddingTop: BASE_SPACE
          }}
        >
          <PopularEvents data={data} />
          <Categories
            categories={[
              "Food",
              "Festival",
              "Music",
              "Party",
              "Religion",
              "Art"
            ]}
          />
        </Content>
      </Container>
    );
  }
}

export default Home;

const style = StyleSheet.create({});
