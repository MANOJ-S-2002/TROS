import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons, COLORS, SIZES, FONTS } from "./constants";

// const staticImage = require("./images/bg.jpg");
const image = require("./images/last.png");
export default function App({ navigation}) {
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={staticImage} style={styles.ImageBackground}> */}
      <StatusBar style="auto" />
      <Image source={image} />
      <Text style={styles.text}>Payment Successful</Text>
      <View
        style={{
          padding: SIZES.padding,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: SIZES.width * 0.9,
            // padding: SIZES.padding,
            backgroundColor: COLORS.primary,
            alignItems: "center",
            borderRadius: SIZES.radius,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
            Keep Shopping
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity></TouchableOpacity> */}
      </View>

      {/* <Text style={styles.second}>Keep on shoping</Text> */}

      {/* </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ImageBackground: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    paddingTop: 80,
  },
  second: {
    fontSize: 30,
  },
});
