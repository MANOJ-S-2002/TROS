import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Restaurant from "./Restaurant";
import OrderDelivery from "./OrderDelivery";
import Shirt from "./components/Shirt";
// import Details from "./components/Details"
import Pay from "./components/PaymentModes";
import Address from "./components/Address";


// import HomeStackNavigator from "./components/HomeStackNavigator";

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
      {/* <Stack.Screen name="TROS" component={HomeStackNavigator} /> */}

      <Stack.Screen name="Shirt" component={Shirt} />
      

      <Stack.Screen name="Address" component={Address} />

      <Stack.Screen name="pay" component={ Pay} />
      



      {/* <Stack.Screen name="Product Details" component={Details} /> */}
    </Stack.Navigator>
  );
};
export default StackNavigator;
