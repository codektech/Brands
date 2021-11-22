/** @format */

import React from "react";
import { View, ScrollView } from "react-native";
import Collection from "../components/collection";
const CollectionScreen = () => {
  const collectionData = [
    {
      image1: require("../Images/image6.png"),
      Text1: "Men Collections",
      image2: require("../Images/Group.png"),
      Text2: " 50%",
      Text3: "Junaid Jamshed ",
    },
    {
      image1: require("../Images/image7.png"),
      Text1: "Women Collection ",
      image2: require("../Images/Group.png"),
      Text2: " 51%",
      Text3: "Junaid Jamshed ",
    },
    {
      image1: require("../Images/image8.png"),
      Text1: "KIDS-GIRL Collections",
      image2: require("../Images/Group.png"),
      Text2: " 52%",
      Text3: "Junaid Jamshed ",
    },
    {
      image1: require("../Images/image9.png"),
      Text1: "KIDS-Boy Collections",
      image2: require("../Images/Group.png"),
      Text2: " 52%",
      Text3: "Junaid Jamshed ",
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ marginTop: "8%", marginLeft: "4%" }}>
        {collectionData.map(({ image1, image2, Text1, Text2, Text3 }) => {
          return (
            <Collection
              image1={image1}
              image2={image2}
              Text1={Text1}
              Text2={Text2}
              Text3={Text3}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default CollectionScreen;
