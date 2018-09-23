import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Content } from "native-base";
import MainHeader from "../components/commons/MainHeader";
import { BASE_SPACE, IMG_4, IMG_1, IMG_3, rnSetPadding } from "../tools";
import PopularEvents from "../components/Home/PopularEvents";
import Categories from "../components/Home/Categories";
import RecentEvents from "../components/Home/RecentEvents";
import db from "../config/db";

class Home extends Component {
  state = {
    categories: [],
    data: []
  };

  render() {
    const {} = style;
    const { data, categories } = this.state;

    return (
      <Container>
        <MainHeader title="Discovery" />
        <Content
          showsVerticalScrollIndicator={false}
          style={{
            ...rnSetPadding(BASE_SPACE, "vertical")
          }}
        >
          <PopularEvents data={data} />
          <Categories categories={categories} />
          <RecentEvents data={data} />
        </Content>
      </Container>
    );
  }

  componentDidMount() {
    this.setState({ data: db.data, categories: db.categories });
  }
}

export default Home;

const style = StyleSheet.create({});
