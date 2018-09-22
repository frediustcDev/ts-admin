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
import CarouselItem from "../components/Home/CarouselItem";

class Home extends Component {
  state = {
    data: [
      {
        id: "1",
        name: "Festival des grillades",
        location: "Abidjan",
        date: "21 Sept 2018",
        hour: "10:00",
        color: "red",
        basePrice: 20,
        rank: 0.1
      },
      {
        id: "2",
        name: "Festival des grillades",
        location: "Abidjan",
        date: "21 Sept 2018",
        hour: "10:00",
        color: "green",
        basePrice: 30,
        rank: 3.6
      },
      {
        id: "3",
        name: "Festival des grillades",
        location: "Abidjan",
        date: "21 Sept 2018",
        hour: "10:00",
        color: "blue",
        basePrice: 10,
        rank: 2
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
          <HomeSection
            title="Popular Events"
            subtitle="Discover all the newest and hotest events around you and get your
            ticket before all your friends."
          >
            <Carousel
              ref={c => {
                this._carousel = c;
              }}
              data={data}
              renderItem={({ item, index }) => <CarouselItem {...item} />}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={SLIDER_ITEM_WIDTH}
              autoplay
              loop
            />
          </HomeSection>
        </Content>
      </Container>
    );
  }
}

export default Home;

const style = StyleSheet.create({});
