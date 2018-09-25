import React from "react";
import { StyleSheet } from "react-native";
import {
  Text,
  Button,
  Item,
  Input,
  Label,
  Textarea,
  Picker,
  View,
  Icon
} from "native-base";
import {
  textDark,
  textColor,
  rnSetPadding,
  BASE_SPACE,
  bgLight
} from "../../tools";

const FormField = ({
  label,
  textArea,
  picker,
  image,
  data,
  placeholder,
  container,
  children,
  ...rest
}) => {
  const { inputStyle, labelStyle, textAreaStyle, imageSytle } = styles;
  let Inp = (
    <Item stackedLabel style={{ marginLeft: null }}>
      {label && <Label style={labelStyle}>{label}</Label>}
      <Input
        style={inputStyle}
        autoCapitalize="words"
        placeholder={placeholder}
        keyboardAppearance="light"
        {...rest}
      />
    </Item>
  );

  //case textArea
  if (textArea) {
    Inp = (
      <React.Fragment>
        {label && <Label style={labelStyle}>{label}</Label>}
        <Textarea
          style={textAreaStyle}
          rowSpan={5}
          keyboardAppearance="light"
        />
      </React.Fragment>
    );
  }

  //case picker
  if (picker) {
    Inp =
      data || data.length <= 0 ? (
        <React.Fragment>
          {label && <Label style={labelStyle}>{label}</Label>}
          <Item picker>
            <Picker
              itemTextStyle={inputStyle}
              mode="dialog"
              placeholder="Select your a category"
              textStyle={inputStyle}
              itemStyle={{ backgroundColor: "red" }}
            >
              {data.map(e => (
                <Picker.Item label={e} value={e} key={e} />
              ))}
            </Picker>
          </Item>
        </React.Fragment>
      ) : (
        <Text>data is required</Text>
      );
  }

  if (image) {
    Inp = (
      <React.Fragment>
        {label && <Label style={labelStyle}>{label}</Label>}
        <Button full light style={imageSytle}>
          <Icon type="Feather" name="download" style={inputStyle} />
          <Text style={inputStyle}>Select an Image...</Text>
        </Button>
      </React.Fragment>
    );
  }

  if (container) {
    Inp = (
      <React.Fragment>
        {label && <Label style={labelStyle}>{label}</Label>}
        {children}
      </React.Fragment>
    );
  }

  return <View style={{ marginBottom: BASE_SPACE }}>{Inp}</View>;
};

export default FormField;

const styles = StyleSheet.create({
  inputStyle: {
    fontFamily: "ws",
    color: textColor,
    fontSize: 14
  },
  textAreaStyle: {
    fontFamily: "ws",
    color: textColor,
    backgroundColor: bgLight,
    borderWidth: null,
    ...rnSetPadding(10),
    fontSize: 14
  },
  labelStyle: {
    fontFamily: "ws",
    color: textDark,
    fontSize: 15,
    ...rnSetPadding(5, "vertical")
  },
  imageSytle: {
    elevation: null
  }
});
