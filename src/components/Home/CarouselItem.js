import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { View, Text, H3, Icon } from "native-base";
import {
  rnFill,
  TITLE_SPACE,
  BASE_SPACE,
  STAR_COLOR,
  textDark,
  bgLight,
  textLight,
  linkActive,
  textColor,
  rnSetPadding,
  rnSetPosition
} from "../../tools";

const Star = ({ active }) => (
  <Icon
    type="Entypo"
    name="star"
    style={{
      color: active ? STAR_COLOR : textLight,
      fontSize: 12
    }}
  />
);

const PriceSection = ({ basePrice }) => (
  <React.Fragment>
    <Text style={styles.fromStyle}>From</Text>
    <Text style={styles.priceStyle}>{basePrice}$</Text>
  </React.Fragment>
);

const DetailSection = ({ type, name, title }) => (
  <View style={{ flexDirection: "row" }}>
    <Icon type={type || "Feather"} name={name} style={styles.detailIconStyle} />
    <Text style={styles.detailTitleStyle}>{title}</Text>
  </View>
);

const StarList = ({ rank }) => {
  const _ = Math.ceil(rank);
  const ar = [...Array(5)].map(
    (e, i) => (_ > i ? <Star key={i} active /> : <Star key={i} />)
  );

  return (
    <View
      style={{
        flexDirection: "row",
        ...rnSetPadding(5),
        backgroundColor: bgLight,
        borderRadius: 2
      }}
    >
      {ar}
    </View>
  );
};

const CarouselItem = ({
  id,
  name,
  location,
  date,
  hour,
  basePrice,
  rank,
  category,
  image
}) => {
  const { imageStyle, detailStyle, boxSeparatorStyle, titleStyle } = styles;
  return (
    <TouchableOpacity
      onPress={() => alert(`Clicked Event ID: ${id}`)}
      style={{ ...rnSetPadding(BASE_SPACE, "horizontal") }}
    >
      <View style={imageStyle}>
        <Image source={image} style={{ ...rnFill, resizeMode: "cover" }} />
      </View>
      <View style={detailStyle}>
        <View style={boxSeparatorStyle}>
          <H3 style={titleStyle}>{name}</H3>
          <StarList rank={rank} />
        </View>
        <View style={boxSeparatorStyle}>
          <View>
            <DetailSection name="folder" title={`in ${category}`} />
            <DetailSection name="map-pin" title={location} />
            <DetailSection name="calendar" title={`${date} / ${hour}`} />
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <PriceSection basePrice={basePrice} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CarouselItem;

// const star
const styles = StyleSheet.create({
  starStyle: ({ active }) => ({
    color: active ? STAR_COLOR : textLight,
    fontSize: 12
  }),
  fromStyle: { fontFamily: "ws_light", color: textLight, fontSize: 12 },
  priceStyle: { fontFamily: "ws_sBold", color: linkActive, fontSize: 24 },
  detailIconStyle: { color: textDark, marginRight: 5, fontSize: 12 },
  detailTitleStyle: { fontFamily: "ws", color: textColor, fontSize: 12 },
  imageStyle: {
    ...rnFill,
    height: 150,
    borderRadius: 5,
    elevation: 10,
    marginBottom: 10,
    overflow: "hidden"
  },
  detailStyle: {
    // backgroundColor: bgLight,
    ...rnSetPadding(10),
    borderRadius: 5
  },
  boxSeparatorStyle: {
    flexDirection: "row",
    width: null,
    flex: 1,
    ...rnSetPosition("top", "row"),
    justifyContent: "space-between"
  },
  titleStyle: {
    fontFamily: "ws_light",
    color: textDark,
    marginBottom: TITLE_SPACE
  }
});
