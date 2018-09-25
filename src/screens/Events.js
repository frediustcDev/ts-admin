import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Content, Tab, Tabs, ScrollableTab } from "native-base";
import MainHeader from "../components/commons/MainHeader";
import { primaryColor, bgLight, textColor } from "../tools";
import db from "../config/db";
import EventCard from "../components/commons/EventCard";
import LoadingScreen from "../components/LoadingScreen";

class Events extends Component {
  state = {
    categories: [],
    data: [],
    loaded: false
  };

  render() {
    const {} = style;

    return (
      <Container>
        <MainHeader title="Events" hasTabs />
        <Content>
          <Tabs
            renderTabBar={() => <ScrollableTab />}
            tabBarUnderlineStyle={{ backgroundColor: primaryColor, height: 2 }}
            style={{ borderBottomColor: "red" }}
          >
            {this._renderTab(this.state.categories)}
          </Tabs>
        </Content>
      </Container>
    );
  }

  _renderTab = ar => {
    const newAr = [...ar];
    newAr.unshift("All");
    return newAr.map(e => (
      <Tab
        heading={e.toUpperCase()}
        key={e}
        tabStyle={{
          backgroundColor: bgLight,
          borderColor: "green"
        }}
        textStyle={{ color: textColor, fontFamily: "ws", fontSize: 12 }}
        activeTextStyle={{
          color: primaryColor,
          fontFamily: "ws",
          fontSize: 12,
          fontWeight: "normal"
        }}
        activeTabStyle={{
          backgroundColor: bgLight
        }}
      >
        {this.state.data.map(e => (
          <EventCard key={e.id} data={e} />
        ))}
      </Tab>
    ));
  };

  componentDidMount() {
    this.setState({ data: db.data, categories: db.categories });
  }
}

export default Events;

const style = StyleSheet.create({});
