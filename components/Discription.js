/** @format */

import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Main from "../components/portait";
// import portait from "../components/portait";
const Discription = (props) => {
  const { name, image, para, title, navigation, color } = props;

  return (
    <View
      style={{
        alignItems: "center",
        marginTop: "3%",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Collectionscreen")}>
        <View
          style={{
            backgroundColor: color,
            width: 332,
            height: 130,
            borderRadius: 10,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: "75%",
              width: "40%",
              borderRadius: 17,
              backgroundColor: "black",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: "90%", height: "90%" }}
                source={image}
                // resizeMode="cover"
              ></Image>
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
              <Text>{name}</Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              margin: "6%",
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 21, fontWeight: "bold" }}>{title}</Text>
            <Text>{para}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Discription;
