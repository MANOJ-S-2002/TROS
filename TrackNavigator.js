import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Restaurant from "./Restaurant";
import OrderDelivery from "./OrderDelivery";
// import DrawerContainer from "./components/DrawerContainer";


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >


      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
      {/* <Stack.Screen name="Main" component={DrawerContainer} /> */}



    </Stack.Navigator>
  );
};
export default StackNavigator;

