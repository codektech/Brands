/** @format */

import React from "react";
import { View, Text, Image } from "react-native";
import Navigationbutton from "../components/navigationbutton";
const Onboarding = ({ navigation }) => {
  return (
    <View
      style={{
        // flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <View style={{ height: "10%" }}></View>
      <View
        style={{
          //   marginTop: "20%",
          width: "60%",
          //   height: "10%",
          marginLeft: "6%",
          //   backgroundColor: "pink",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 17,
            }}
          >
            What's your
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 59,
              color: "#DB9D00",
              // fontFamily: "Arial",
            }}
          >
            Favorite
          </Text>
        </View>
        <View
          style={{
            alignItems: "flex-end",
          }}
        >
          <Text style={{ fontSize: 17 }}>brands?</Text>
        </View>
      </View>
      <View
        style={{
          height: "5%",
        }}
      ></View>
      <View
        style={{
          alignItems: "center",
          margin: "4%",
        }}
      >
        <Text style={{ fontSize: 18 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Text>
      </View>
      <Navigationbutton navigation={navigation} />
      <View
        style={{
          flex: 1,

          alignItems: "flex-end",
          // bottom: 0,
          justifyContent: "flex-end",
        }}
      >
        <Image
          style={{
            width: "80%",
            height: "80%",
          }}
          source={require("../Images/image2.png")}
        ></Image>
      </View>
    </View>
  );
};
export default Onboarding;
