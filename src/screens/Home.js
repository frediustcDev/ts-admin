import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Content } from "native-base";
import MainHeader from "../components/commons/MainHeader";
import { BASE_SPACE, IMG_4, IMG_1, IMG_3, rnSetPadding } from "../tools";
import PopularEvents from "../components/Home/PopularEvents";
import Categories from "../components/Home/Categories";
import RecentEvents from "../components/Home/RecentEvents";

class Home extends Component {
  state = {
    categories: ["Food", "Festival", "Music", "Party", "Religion", "Art"],
    data: [
      {
        id: "1",
        image: IMG_4,
        name: "Concert DJ Arafat",
        location: "Abidjan",
        date: "21 Sept 2018",
        hour: "10:00",
        basePrice: 20,
        rank: 0.1,
        category: "Music"
      },
      {
        id: "2",
        image: IMG_1,
        name: "Abidjan Mousse II",
        location: "Abidjan",
        date: "21 Sept 2018",
        hour: "10:00",
        basePrice: 30,
        rank: 3.6,
        category: "Party"
      },
      {
        id: "3",
        image: IMG_3,
        name: "Festival des grillades",
        location: "Abidjan",
        date: "21 Sept 2018",
        hour: "10:00",
        basePrice: 10,
        rank: 2,
        category: "Festival"
      }
    ]
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
}

export default Home;

const style = StyleSheet.create({});
