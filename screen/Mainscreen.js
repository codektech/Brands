/** @format */

import React, { useState } from "react";
import { View, Text, FlatList, Image, ScrollView } from "react-native";
import Main from "../components/portait";
import Discription from "../components/Discription";
import { TextInput } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Textinput from "../components/Textinput";
const Mainscreen = ({ navigation }) => {
  const pData = [
    {
      item: "50%",
      image: require("../Images/image5.png"),
      item_para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      item_title: "Damaka Offer1",
      color: "#F0D89B",
    },
    {
      item: "51%",
      image: require("../Images/image10.png"),
      item_para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      item_title: "Damaka Offer2",
      color: "#A7DDD4",
    },
    {
      item: "52%",
      image: require("../Images/image11.png"),
      item_para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      item_title: "Damaka Offer3",
      color: "#E5E5E5",
    },
    {
      item: "53%",
      image: require("../Images/image12.png"),
      item_para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      item_title: "Damaka Offer4",
      color: "#FFC29B",
    },
    {
      item: "54%",
      image: require("../Images/image13.png"),
      item_para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      item_title: "Damaka Offer5",
      color: "#9BF1FF",
    },
  ];
  return (
    <ScrollView
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <View
        style={{
          margin: "5%",
        }}
      >
        <View style={{}}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
            Explore catagories
          </Text>
        </View>
        <View>
          <Textinput />
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Brands</Text>
        </View>
        <View>
          <Main navigation={navigation} />
        </View>
        <View style={{}}>
          {pData.map(({ item, image, item_para, item_title, color }) => {
            return (
              <Discription
                name={item}
                image={image}
                para={item_para}
                title={item_title}
                navigation={navigation}
                color={color}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};
export default Mainscreen;
