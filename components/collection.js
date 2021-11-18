/** @format */

import React from "react";
import { View, Text, Image } from "react-native";
const Collection = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image source={require("../Images/image6.png")}></Image>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          //   backgroundColor: "blue",
        }}
      >
        <Text>Men Collections</Text>
        <View>
          <Image source={require("../Images/Group.png")}></Image>
          <Text
            style={{
              position: "absolute",
              fontWeight: "bold",
              fontSize: 14,
              marginTop: "5%",
              marginRight: "2%",
              alignSelf: "flex-end",
              color: "#DB9D00",
            }}
          >
            50%
          </Text>
        </View>
        <Text>Junaid Jamshed </Text>
      </View>
    </View>
  );
};
export default Collection;
