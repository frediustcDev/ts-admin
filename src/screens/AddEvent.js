import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  Container,
  Content,
  Text,
  Footer,
  Button,
  FooterTab,
  Form,
  Item,
  Input,
  Label,
  Textarea,
  Picker,
  View,
  Icon
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";
import {
  textDark,
  DANGER_COLOR,
  primaryColor,
  bgColor,
  textLight,
  textColor,
  rnSetPadding,
  BASE_SPACE,
  bgLight,
  rnSetMargin,
  rnSetPosition,
  rnFill
} from "../tools";
import db from "../config/db";
import FormField from "../components/commons/FormField";

class AddEvent extends Component {
  state = {};

  render() {
    const {} = styles;

    return (
      <Container>
        <Content
          contentContainerStyle={{
            ...rnSetPadding(BASE_SPACE, "horizontal")
          }}
        >
          <KeyboardAwareScrollView>
            <Form>
              <FormField label="Event Cover" image />
              <FormField label="Event Name" placeholder="My awesome event" />
              <FormField label="Event Description" textArea />
              <FormField label="Event category" picker data={db.categories} />
              <FormField label="Event Prices" container>
                <Grid style={{ ...rnFill }}>
                  <Col>
                    <FormField placeholder="Ticket Type" />
                  </Col>
                  <Col>
                    <FormField
                      placeholder="Ticket Price"
                      keyboardType="numeric"
                    />
                  </Col>
                  <Col style={{ width: 45 }}>
                    <Button
                      style={{ marginTop: 10 }}
                      transparent
                      rounded
                      danger
                      full
                    >
                      <Icon
                        type="Feather"
                        name="trash"
                        style={{ fontSize: 16, ...rnSetMargin() }}
                      />
                    </Button>
                  </Col>
                </Grid>
              </FormField>
              <Button style={{ marginBottom: BASE_SPACE }} full bordered info>
                <Icon name="plus" type="Feather" fontSize={14} />
                <Text>Add Price</Text>
              </Button>
            </Form>
          </KeyboardAwareScrollView>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              full
              disabled={false}
              style={{ backgroundColor: primaryColor }}
            >
              <Text style={{ fontFamily: "ws", color: bgColor }}>Create</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

  static navigationOptions = {
    headerStyle: { elevation: 0 },
    headerTitle: "Create Event",
    headerTitleStyle: {
      fontFamily: "ws",
      fontWeight: "normal",
      color: textDark
    }
  };
}

export default AddEvent;

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
