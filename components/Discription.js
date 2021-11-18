/** @format */

import React from "react";
import { View, Text, Image } from "react-native";
const Discription = () => {
  return (
    <View
      style={{
        backgroundColor: "#DB9D00",
        width: "100%",
        height: "16%",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          height: "85%",
          width: "39%",
          borderRadius: 17,
          backgroundColor: "black",
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image style={{}} source={require("../Images/image5.png")}></Image>
        </View>
        <View
          style={{
            position: "absolute",

            backgroundColor: "white",
            width: "35%",
            height: "19%",
            borderTopRightRadius: 17,
            borderBottomLeftRadius: 17,
            alignSelf: "flex-end",
            alignItems: "center",
          }}
        >
          <Text>50%</Text>
        </View>
      </View>
      <View
        style={{
          // backgroundColor: "blue",
          // alignSelf: "center",
          alignItems: "center",
          // justifyContent: "center",
          margin: "2%",
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Damaka Offer</Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
          industry'skudgcbzkugbxiubiugbikbikgbiko
        </Text>
      </View>
    </View>
  );
};
export default Discription;
