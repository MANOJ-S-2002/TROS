import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Restaurant from "./Restaurant";
import OrderDelivery from "./OrderDelivery";


const LoginStack = createNativeStackNavigator();

const LoginStackNavigator = () => {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <LoginStack.Screen name="Home" component={Home} />
      <LoginStack.Screen name="Restaurant" component={Restaurant} />
      <LoginStack.Screen name="OrderDelivery" component={OrderDelivery} />

    </LoginStack.Navigator>
  );
};
export default LoginStackNavigator;

