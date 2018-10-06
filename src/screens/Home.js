import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Content } from "native-base";
import MainHeader from "../components/commons/MainHeader";
import { BASE_SPACE, rnSetPadding } from "../tools";
import PopularEvents from "../components/Home/PopularEvents";
import Categories from "../components/Home/Categories";
import RecentEvents from "../components/Home/RecentEvents";
import { db } from "../config/base";

class Home extends Component {
  state = {
    categories: ["Food", "Festival", "Music", "Party", "Religion", "Art"],
    data: [],
    isReady: false
  };

  async componentDidMount() {
    await db
      .collection("events")
      .orderBy("createdAt", "desc")
      .get()
      .then(docs => {
        const data = [];
        docs.forEach(doc => {
          data.push({ id: doc.id, ...doc.data() });
        });

        this.setState({ isReady: true, data }, () => {
          console.log("done");
        });
      })
      .catch(() => {});
  }

  render() {
    const {} = style;
    const { data, categories, isReady } = this.state;

    return (
      isReady && (
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
      )
    );
  }
}

export default Home;

const style = StyleSheet.create({});
