/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigationbutton from "./components/navigationbutton";
import Discription from "./components/Discription";
import Main from "./components/portait";
import Collection from "./components/collection";
import Onboarding from "./screen/Onboarding";
export default function App() {
  return (
    <View
      style={{
        // flex: 1,
        height: "100%",
        width: "100%",
        // marginTop: "20%",
        // margin: "2%",
        // position: "absolute",
      }}
    >
      <Onboarding />
      {/* <Navigationbutton />

      <Main />
      <View style={{ height: "2%" }}></View>
      <Discription />
      <View style={{ height: "2%" }}></View>
      <Collection /> */}
    </View>
  );
}
