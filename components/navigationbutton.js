/** @format */

import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
const navigationbutton = () => {
  return (
    // <View>

    <View
      style={{
        // marginTop: "40%",
        backgroundColor: "#DB9D00",
        width: "50%",
        height: "6%",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Text style={{ color: "white", fontSize: 16 }}>Get Ready</Text>
      <View style={{ marginLeft: "10%" }}>
        <AntDesign name="arrowright" color="white" size={24} />
      </View>
    </View>
  );
};
export default navigationbutton;
