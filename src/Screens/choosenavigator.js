import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChooseLocattion from "./ChooseLocation";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="chooseLocation" component={ChooseLocattion} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
