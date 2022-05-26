import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HelpPage from "../pages/HelpPage";
import Aboutus from "../pages/Aboutus";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import PartnerLoginStack from "./PartnerLoginStack";
import IconLogo from "./IconLogo.png";
import { Image } from "react-native";
import HomeStackNavigator from "./HomeStackNavigator";
import Profile from "./Profile";
import Home from "./Home";
import Login from "./LoginStackNavigator";
import Cart from "../pages/Cart";
import Tracking from "../pages/Tracking";

const Drawer = createDrawerNavigator();

export default function DrawerContainer(props) {
  return (
    // <NavigationContainer>
    <Drawer.Navigator
      screenOptions={{
        // headerShown: false,
        drawerActiveBackgroundColor: "brown",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="cart" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Tracking"
        component={Tracking}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="profile" size={25} color={color} />
          ),
        }}
      />

      {/* <Drawer.Screen name="Login" component={LoginStackNavigator} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="person-outline" size={25} color={color} />
                )
            }} /> */}

      <Drawer.Screen
        name="Partner Login"
        component={PartnerLoginStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={25} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Help"
        component={HelpPage}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="help" size={25} color={color} />
          ),
        }}
      />

      {/* <Drawer.Screen name="Delaits" component={DetailsScreen} options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="help" size={25} color={color} />
                    )
                }} /> */}

      <Drawer.Screen
        name="AboutUs"
        component={Aboutus}
        options={{
          drawerIcon: ({ color }) => (
            <Image source={IconLogo} style={{ width: 35, height: 35 }} />
            // <Ionicons name="help" size={25} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
    /* </NavigationContainer> */
  );
}
