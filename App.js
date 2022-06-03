import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { StatusBar } from "react-native";
import DrawerContainer from "./components/DrawerContainer";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      {/* <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      /> */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="MainHome" component={DrawerContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
