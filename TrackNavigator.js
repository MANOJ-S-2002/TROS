import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Restaurant from "./Shop";
import OrderDelivery from "./OrderDelivery";
// import Product from "./Details"
import Pay from "./components/PaymentModes";
import Address from "./components/Address";
import Upload from "./components/UploadProdect"
import Last from "./last";


// import uprofile from "./components/UserProfile"
// import pprofile from "./components/PartnerProfile"




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

      {/* <Stack.Screen name="Product" component={Product} /> */}
      

      <Stack.Screen name="Address" component={Address} />

      <Stack.Screen name="pay" component={ Pay} />
      <Stack.Screen name="UploadProduct" component={ Upload} />
      <Stack.Screen name="last" component={ Last} />

      {/* <Stack.Screen name="UserProfile" component={ uprofile} />
      <Stack.Screen name="Partner Profile" component={ pprofile} /> */}



      
      



      {/* <Stack.Screen name="Product Details" component={Details} /> */}
    </Stack.Navigator>
  );
};
export default StackNavigator;
