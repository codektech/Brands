/** @format */

import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Main = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Collectionscreen")}>
      <View
        style={{
          backgroundColor: "black",
          width: 132,
          height: 177,
          marginTop: "5%",
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
            borderTopRightRadius: 17,

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
    </TouchableOpacity>
  );
};
export default Main;
