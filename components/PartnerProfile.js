import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Feather as Mgs } from "react-native-vector-icons";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Rating from "./Rating";

export default function Profile({ navigation }) {
  return (
    <View style={style.container}>
      <View style={style.container1}>
        <Image source={require("./IconLogo.png")} style={style.icons} />
        <Text style={style.title}>Partner Profile</Text>
        <Mgs name="message-square" size={25} style={style.icons1} />
      </View>
      <View style={{ padding: 7, alignItems: "center" }}>
        <Image
          source={require("../assets/images/avatar-3.jpg")}
          style={style.userImage}
        />

        <View style={{ position: "absolute" }}>
          <View style={style.addBtnContainer}>
            <Ionicons name="add-outline" style={style.addBtn} />
          </View>
          <View>
            <Text style={style.profile}>SANTHOSH</Text>
            <Text style={style.profile}>Santhosh@gmail.com</Text>
            <Text style={style.profile}>
              Legend Saravana Stores, Kiilpakam, Chennai, India
            </Text>

            <Text style={style.profile}>8234861597</Text>

            <Text style={style.profile}></Text>

            {/* <Text style={style.about}>
              <Text>I am a part of</Text>{" "}
              <Text style={{ fontWeight: "bold" }}>TROS</Text>, We provide all
              types of <Text style={{ fontWeight: "bold" }}>Clothes </Text>
              directly from the Shop Owners. so that we provide all in{" "}
              <Text style={{ fontWeight: "bold" }}>best Price</Text>.
            </Text> */}

            <TouchableOpacity
              style={style.logico}
              onPress={() => {
                navigation.navigate("UploadProduct");
              }}
            >
              <Entypo name="log-out" size={25}>
                Upload Product
              </Entypo>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.logico}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Entypo name="log-out" size={25}>
                {" "}
                Logout
              </Entypo>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
              padding: 15,
            }}
          >
            {/* <Image source={require('../images/starico.jpg')} style={style.icons3} /> */}
          </View>
          {/* <View style={style.ratingcont}>
            <Rating />
          </View> */}
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 500,
    width: "100%",
    borderColor: "#ffffff",
    alignItems: "center",
    padding: 14,
    marginTop: 15,
  },

  container1: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  title: {
    fontWeight: "bold",
    fontSize: 25,
  },

  userImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: "#ffffff",
  },

  userName: {
    textAlign: "center",
    fontSize: 12,
    marginTop: 5,
    letterSpacing: 2,
  },
  profile: {
    flex: 1,
    padding: 10,
    fontWeight: "bold",
  },

  addBtnContainer: {
    marginTop: 55,
    backgroundColor: "#4c68d7",
    marginLeft: "53%",
    width: 19,
    height: 19,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: "#fff",
    justifyContent: "center",
  },

  addBtn: {
    alignItems: "center",
  },

  icons: {
    height: 50,
    width: 50,
    borderRadius: 50,
    // borderColor: "yellow",
    borderWidth: 3,
    marginStart: 10,
  },

  icons1: {
    marginEnd: 10,
  },

  about: {
    alignItems: "center",
    padding: 15,
    textAlign: "center",
  },

  logico: {
    fontSize: 12,
    margin: 35,
    alignItems: "center",
  },

  icons3: {
    height: 30,
    width: 26,
    padding: 10,
  },
  ratingcont: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 15,
  },
});
