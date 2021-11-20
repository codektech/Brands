/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigationbutton from "./components/navigationbutton";
import Discription from "./components/Discription";
import Main from "./components/portait";
import Collection from "./components/collection";
import Onboarding from "./screen/Onboarding";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Mainscreen from "./screen/Mainscreen";
import { NavigationContainer } from "@react-navigation/native";
import CollectionScreen from "./screen/Collectionscreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mainscreen"
          component={Mainscreen}
          options={{
            // headerShown: false,
            title: "Brand",
            headerStyle: {
              backgroundColor: "#DB9D00",
            },
          }}
        />

        <Stack.Screen
          name="Collectionscreen"
          component={CollectionScreen}
          options={{
            //   // headerShown: false,
            title: "Collections",
            headerStyle: {
              backgroundColor: "#DB9D00",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
