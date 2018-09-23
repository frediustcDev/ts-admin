import React, { Component } from "react";
import Carousel from "react-native-snap-carousel";
// import { View, Text } from "native-base";
import HomeSection from "./HomeSection";
import CarouselItem from "./CarouselItem";
import { SLIDER_WIDTH, SLIDER_ITEM_WIDTH } from "../../tools";

const PopularEvents = ({ data }) => {
  return (
    <HomeSection
      title="Popular Events"
      subtitle="Discover all the newest and hotest events around you and get your
            ticket before all your friends."
    >
      <Carousel
        data={data}
        renderItem={({ item, index }) => <CarouselItem {...item} />}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={SLIDER_ITEM_WIDTH}
        autoplay
        loop
      />
    </HomeSection>
  );
};

export default PopularEvents;
