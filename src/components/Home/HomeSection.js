import React from "react";
import { H1, Text, View } from "native-base";
import { TITLE_SPACE, textLight, BASE_SPACE, rnSetPadding } from "../../tools";

const HomeSection = ({ title, subtitle, children }) => {
  return (
    <React.Fragment>
      {(title || subtitle) && (
        <View style={{ ...rnSetPadding(BASE_SPACE, "horizontal") }}>
          {title && (
            <H1
              style={{
                fontFamily: "ws_xBold",
                marginBottom: TITLE_SPACE
              }}
            >
              {title}
            </H1>
          )}
          {subtitle && (
            <Text
              style={{
                color: textLight,
                fontFamily: "ws_light",
                marginBottom: BASE_SPACE
              }}
            >
              {subtitle}
            </Text>
          )}
        </View>
      )}
      {children}
    </React.Fragment>
  );
};

export default HomeSection;
