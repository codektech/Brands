/** @format */

import React from "react";
import { View, Text, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
const Navigationbutton = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#DB9D00",
        width: "50%",
        height: "6%",
        justifyContent: "center",
        borderRadius: 16,

        marginLeft: "4%",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Mainscreen")}>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              width: "50%",
              fontSize: 19,
            }}
          >
            Get Ready
          </Text>
          <View
            style={{
              marginLeft: "5%",
            }}
          >
            <AntDesign name="arrowright" color="white" size={24} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Navigationbutton;
