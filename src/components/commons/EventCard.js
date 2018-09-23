import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import { View, H3 } from "native-base";
import {
  BASE_SPACE,
  bgLight,
  rnSquare,
  rnSetMargin,
  rnFill,
  textDark,
  TITLE_SPACE
} from "../../tools";
import CardDetail from "./CardDetail";
import StarList from "./StarList";

const GreyView = ({ width, height, style }) => {
  return (
    <View
      style={{
        backgroundColor: bgLight,
        marginBottom: 5,
        width,
        height,
        ...style
      }}
    />
  );
};

const Ghost = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: BASE_SPACE,
        ...rnSetMargin(BASE_SPACE, "horizontal")
      }}
    >
      <GreyView style={{ ...rnSquare(100), marginRight: BASE_SPACE }} />
      <View>
        <GreyView width={200} height={15} />
        <GreyView width={150} height={10} />
        <GreyView width={150} height={10} />
        <GreyView width={150} height={10} />
        <GreyView width={50} height={10} />
        <GreyView width={50} height={30} />
        <View
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        />
      </View>
    </View>
  );
};
class EventCard extends Component {
  state = {
    loaded: false
  };

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    const {
      id,
      name,
      location,
      date,
      hour,
      rank,
      category,
      image
    } = this.props.data;
    return this.state.loaded ? (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginBottom: BASE_SPACE,
          paddingBottom: BASE_SPACE,
          ...rnSetMargin(BASE_SPACE, "horizontal"),
          borderBottomColor: bgLight,
          borderBottomWidth: 1
        }}
      >
        <FastImage
          source={{
            uri: "https://unsplash.it/400/400?image=1",
            headers: { Authorization: "someAuthToken" },
            priority: FastImage.priority.normal
          }}
          resizeMode={FastImage.resizeMode.contain}
          style={{ ...rnFill, borderRadius: 5 }}
        />
        <View
          style={{
            ...rnSquare(100),
            ...rnSetMargin(BASE_SPACE),
            borderRadius: 5,
            elevation: 10,
            borderRadius: 5
          }}
        >
          <Image
            source={image}
            style={{ ...rnFill, resizeMode: "cover", borderRadius: 5 }}
          />
        </View>
        <View style={{ marginTop: BASE_SPACE }}>
          <H3
            style={{
              fontFamily: "ws_light",
              color: textDark,
              marginBottom: TITLE_SPACE
            }}
          >
            {name}
          </H3>
          <CardDetail name="folder" title={`in ${category}`} />
          <CardDetail name="map-pin" title={location} />
          <CardDetail name="calendar" title={`${date} / ${hour}`} />
          <StarList rank={rank} />
        </View>
      </TouchableOpacity>
    ) : (
      <Ghost />
    );
  }
}

export default EventCard;
