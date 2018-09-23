import React from "react";
import { StyleSheet } from "react-native";
import { H1, Text, View } from "native-base";
import { TITLE_SPACE, textLight, BASE_SPACE, rnSetPadding } from "../../tools";

const HomeSection = ({ title, subtitle, children }) => {
  const { titleStyle, subtitleStyle } = styles;
  return (
    <React.Fragment>
      {(title || subtitle) && (
        <View style={{ ...rnSetPadding(BASE_SPACE, "horizontal") }}>
          {title && <H1 style={titleStyle}>{title}</H1>}
          {subtitle && <Text style={subtitleStyle}>{subtitle}</Text>}
        </View>
      )}
      {children}
    </React.Fragment>
  );
};

export default HomeSection;

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: "ws_xBold",
    marginBottom: TITLE_SPACE
  },
  subtitleStyle: {
    color: textLight,
    fontFamily: "ws_light",
    marginBottom: BASE_SPACE
  }
});
