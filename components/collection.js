/** @format */

import React from "react";
import { View, Text, Image } from "react-native";
const Collection = (props) => {
  const { image1, image2, Text1, Text2, Text3 } = props;
  return (
    <View style={{ flexDirection: "row", marginTop: "5%" }}>
      <Image source={image1}></Image>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "black" }}>
          {Text1}
        </Text>
        <View>
          <Image source={image2}></Image>
          <Text
            style={{
              position: "absolute",
              fontWeight: "bold",
              fontSize: 14,
              marginTop: "7%",
              marginRight: "4%",
              alignSelf: "flex-end",
              color: "#DB9D00",
            }}
          >
            {Text2}
          </Text>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{Text3}</Text>
      </View>
    </View>
  );
};
export default Collection;
