import React, { Component } from "react";
import { StyleSheet, ProgressBarAndroid } from "react-native";
import {
  Container,
  Content,
  Text,
  Footer,
  Button,
  FooterTab,
  Form,
  Icon,
  View
} from "native-base";
import { Grid, Col } from "react-native-easy-grid";
import {
  textDark,
  primaryColor,
  bgColor,
  textColor,
  rnSetPadding,
  BASE_SPACE,
  bgLight,
  rnFill
} from "../tools";
import db from "../config/db";
import FormField from "../components/commons/FormField";
import { storage, firestore } from "../config/base";

class AddEvent extends Component {
  state = {
    animating: false,
    formData: {},
    formStructure: {
      cover: {
        type: "image",
        label: "Event Cover"
      },
      name: {
        label: "Event Name",
        placeholder: "My awesome event"
      },
      description: {
        type: "textarea",
        label: "Event Description"
      },
      category: {
        type: "picker",
        label: "Event Category",
        data: db.categories
      },
      price: {
        type: "container",
        label: "Event Prices",
        children: [
          {
            row: [
              {
                type: "picker",
                placeholder: "Ticket Type",
                data: db.ticketType
              },
              {
                type: "text",
                placeholder: "Ticket Price",
                keyboardType: "numeric"
              },
              {
                type: "btn",
                render: () => (
                  <Button
                    onPress={() => alert("clicked btn")}
                    style={{ marginBottom: BASE_SPACE }}
                    full
                    bordered
                  >
                    <Icon name="plus" type="Feather" fontSize={14} />
                    <Text>Add Price</Text>
                  </Button>
                )
              }
            ]
          }
        ]
      }
    }
  };
  componentDidMount() {
    Object.keys(this.state.formStructure).map(key => {
      const formData = this.state.formData;
      formData[key] = null;
      this.setState(formData);
    });
  }

  render() {
    const {} = styles;
    const { animating } = this.state;
    return (
      <Container>
        <Content
          contentContainerStyle={{ ...rnSetPadding(BASE_SPACE, "horizontal") }}
        >
          {/* <ProgressBarAndroid
            styleAttr="Small"
            color={primaryColor}
            animating={animating}
          /> */}
          <Form>{this.generateForm()}</Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              full
              disabled={false}
              style={{ backgroundColor: primaryColor }}
              onPress={this._onFormSubmit}
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

  _uploadImg = async (uri, name) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    return await storage
      .ref()
      .child(`images/covers/${name}`)
      .put(blob);
  };

  _onFormSubmit = async () => {
    // this.setState({ animating: true });
    const formData = this.state.formData;
    const name = "cover_" + new Date().valueOf();
    const { cover, ...data } = formData;
    const { uri, cancelled, type, ...restCover } = cover;

    if (cover) {
      this._uploadImg(cover.uri, name)
        .then(p => {
          p.ref.getDownloadURL().then(uri => {
            firestore
              .collection("events")
              .add({
                ...data,
                createdAt: new Date(),
                img: { ...restCover, uri }
              })
              .then(docRef => {
                this.setState({
                  formData: {
                    cover: null,
                    name: null,
                    description: null,
                    category: null,
                    price: null
                  }
                });
                alert("Event added!");
              })
              .catch(err => console.log(err));
          });
        })
        .catch(err => console.log(err));
    }
  };

  onInputChange = (name, rest) => {
    const { formData } = this.state;
    formData[name] = rest[0];

    this.setState({ formData });
  };

  generateForm = el => {
    const struct = this.state.formStructure;
    const keys = Object.keys(struct);

    const data = keys.map(key => {
      const el = struct[key];
      const { type, placeholder, label, children, data, row } = el;
      const _type = type || "text";
      const _formField = (
        <FormField
          key={key}
          {...{ [_type]: true }}
          data={data}
          placeholder={placeholder}
          label={label}
          name={key}
          change={this.onInputChange}
          value={this.state.formData[key]}
        >
          {/* {children && this.generateForm(children)} */}
        </FormField>
      );
      const _output = row ? <Grid style={{ ...rnFill }} /> : _formField;

      return _output;
    });

    return data;
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

{
  /* <FormField label="Event Prices" container>
  <Grid style={{ ...rnFill }}>
    <Col>
      <FormField
        placeholder="Ticket Type"
        picker
        data={db.ticketType}
      />
    </Col>
    <Col>
      <FormField
        placeholder="Ticket Price"
        keyboardType="numeric"
      />
    </Col>
    <Col style={{ width: 45 }}>
      <Button
        onPress={() => alert("clicked btn")}
        style={{ marginTop: 10 }}
        transparent
        rounded
        full
      >
        <Feather name="trash" size={16} color="#FF5555" />
      </Button>
    </Col>
  </Grid>
</FormField>
  <Button
    onPress={() => alert("clicked btn")}
    style={{ marginBottom: BASE_SPACE }}
    full
    bordered
  >
    <Icon name="plus" type="Feather" fontSize={14} />
    <Text>Add Price</Text>
  </Button> */
}
