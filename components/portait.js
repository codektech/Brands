/** @format */

import React from "react";
import { View, Text, Image } from "react-native";

const Main = () => {
  return (
    <View
      style={{
        backgroundColor: "black",
        width: "40%",
        height: "30%",
        borderRadius: 17,
      }}
    >
      <View
        style={{
          position: "absolute",
          backgroundColor: "white",
          width: "35%",
          height: "14%",
          borderBottomLeftRadius: 17,
          alignSelf: "flex-end",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16 }}>50%</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image source={require("../Images/Image3.png")} />
      </View>
    </View>
  );
};
export default Main;
