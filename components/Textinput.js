/** @format */

import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Textinput = () => {
  const { text, setText } = useState("");

  return (
    <View
      style={{
        marginTop: "3%",
      }}
    >
      <View
        style={{
          width: 332,
          justifyContent: "center",
          height: 40,
          borderRadius: 11,
          backgroundColor: "lightgrey",
        }}
      >
        <TextInput
          style={{
            position: "absolute",
            borderRadius: 11,
            width: "80%",
            height: "100%",
            marginLeft: "5%",
          }}
          value={text}
          placeholder="choose your categories"
          onChangeText={setText}
          placeholderTextColor="black"
        ></TextInput>
        <View
          style={{
            alignSelf: "flex-end",
            marginRight: "4%",
          }}
        >
          <TouchableOpacity>
            <FontAwesome
              style={{
                color: "#DB9D00",
              }}
              name="search"
              size={27}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Textinput;
