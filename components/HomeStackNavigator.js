import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginStackNavigator from "./LoginStackNavigator";
import Cart from "../pages/Cart";
import Home from "./Home";
import Fruits from "./Shirt";
import Vegetables from "./Tshirt";
import Address from "./Address";
// import StripeApp from "./StripeApp";
// import FruitDetails from "./FruitDetails";
import VegetableDetails from "./Details";
import PaymentModes from "./PaymentModes";
import UploadProdect from "./UploadProdect";
import Pants from "./Pants";
import Shorts from "./Shorts";

const Stack = createNativeStackNavigator();

const StackNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Welcome To TROS"
        component={Home}
        // screenOptions={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginStackNavigator}
        // screenOptions={{ headerShown: false }}
      />

      <Stack.Screen name="Cart" component={Cart} />

      <Stack.Screen
        name="Fruits"
        component={Fruits}
        // screenOptions={{ headerShown: false }}
      />
      {/* <Stack.Screen name="FruitDetails" component={FruitDetails} /> */}

      <Stack.Screen name="Vegetables" component={Vegetables} />
      <Stack.Screen name="Pants" component={Pants} />
      <Stack.Screen name="Shorts" component={Shorts} />


      <Stack.Screen name="Product Details" component={VegetableDetails} />

      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="PaymentModes" component={PaymentModes} />

      <Stack.Screen name="UploadProduct" component={UploadProdect} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
