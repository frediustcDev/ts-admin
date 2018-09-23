import React from "react";
import Carousel from "react-native-snap-carousel";
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
        containerCustomStyle={{ marginBottom: 30 }}
        data={data}
        renderItem={({ item }) => <CarouselItem {...item} />}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={SLIDER_ITEM_WIDTH}
        autoplay
        loop
      />
    </HomeSection>
  );
};

export default PopularEvents;
