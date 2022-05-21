import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginStackNavigator from "./LoginStackNavigator";
import Cart from "../pages/Cart";
import Home from "./Home";
import Fruits from "./shirt";
import Vegetables from "./tshirt";
import Address from "./Address";
// import StripeApp from "./StripeApp";
// import FruitDetails from "./FruitDetails";
import VegetableDetails from "./VegetableDetails";
import PaymentModes from "./PaymentModes";
import UploadProdect from "./UploadProdect";
import Aboutus from "../pages/Aboutus";
//
import Tracking from "../pages/Tracking";
import HelpPage from "../pages/HelpPage";
// import Trackhome from "../pages/Tracking";
// import ChooseLocation from "../Screens/ChooseLocation";

const Stack = createNativeStackNavigator();

const StackNavigator = (props) => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //     headerShown: true,
    // }}
    >
      <Stack.Screen name="Welcome To TROS" component={Home} />
      <Stack.Screen
        name="Login"
        component={LoginStackNavigator}
        screenOptions={{ headerShown: false }}
      />

      <Stack.Screen name="Cart" component={Cart} />

      <Stack.Screen
        name="Shirt"
        component={Fruits}
        screenOptions={{ headerShown: false }}
      />
      {/* <Stack.Screen name="FruitDetails" component={FruitDetails} /> */}

      <Stack.Screen name="Tshirt" component={Vegetables} />

      <Stack.Screen name="Product Details" component={VegetableDetails} />

      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="PaymentModes" component={PaymentModes} />

      <Stack.Screen name="UploadProduct" component={UploadProdect} />
      <Stack.Screen name="About Us" component={Aboutus} />

      <Stack.Screen name="Track" component={Tracking} />
      <Stack.Screen name="Help Page" component={HelpPage} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
