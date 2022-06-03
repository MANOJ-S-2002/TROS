import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import IconLogo from "./IconLogo.png";
import SearchInput from "./SearchInput";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Fruits from "./fruits.png";
import Vegetables from "./vegetables.png";

// import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SliderData from "./data";

const Home = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const { imgUrl, info } = SliderData[index];

  const checkNumber = (number) => {
    if (number > SliderData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return SliderData.length - 1;
    }
    return number;
  };

  const preBtnHandle = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextBtnHandle = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <SafeAreaView style={{ paddingBottom: 40 }}>
      {/* Header content */}
      <View style={styles.container}>
        <View>
          <Image source={IconLogo} style={styles.icon} />
        </View>
        <KeyboardAvoidingView>
          <SearchInput />
        </KeyboardAvoidingView>
        <Ionicons
          name="person-outline"
          size={25}
          onPress={() => navigation.navigate("Login")}
        />
        <Icon
          name="shopping-cart"
          size={30}
          color="#900"
          onPress={() => navigation.navigate("Cart")}
        />
      </View>

      {/* slider content */}
      <View style={styles.Container}>
        <View style={{ paddingLeft: 10 }}>
          <TouchableOpacity onPress={preBtnHandle}>
            <AntDesign name="left" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.slider}>
          <View styale={{ borderRadius: 15 }}>
            <Image source={{ uri: imgUrl }} style={styles.image}></Image>
          </View>
          <View style={styles.info}>
            <Text style={{ color: "white" }}>{info}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={nextBtnHandle}
            style={{ paddingRight: 10 }}
          >
            <AntDesign name="right" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* main content */}
      <View style={styles.maincontainer}>
        <View style={styles.text}>
          <Text style={{ fontSize: 25, color: "white" }}>Catogeries</Text>
        </View>
        <View style={styles.itemcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Fruits")}>
            <View style={styles.list}>
              <Image
                source={Fruits}
                style={{ width: 150, height: 120, borderRadius: 15 }}
              />
              <Text style={{ fontSize: 20 }}>Shirts </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Vegetables")}>
            <View style={styles.list}>
              <Image
                source={Vegetables}
                style={{ width: 150, height: 120, borderRadius: 15 }}
              />
              <Text style={{ fontSize: 20 }}>Tshirts </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    // backgroundColor: "#20b2aa",
    height: 100,
    flexDirection: "row",
    paddingTop: -30,
    padding: 10,
    // marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  //slider styles
  Container: {
    width: "auto",
    height: "35%",
    marginTop: 10,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
      backgroundColor: "rgba(101, 92, 92, 0.91)",
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "brown",
  },

  slider: {
    width: 260,
    height: 160,
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    marginLeft: 20,
    width: 125,
    color: "white",
  },
  image: {
    borderRadius: 15,
    width: 130,
    height: 130,
  },

  //main conten styles
  maincontainer: {
    width: "auto",
    height: "45%",
    margin: 10,
    borderRadius: 10,
    marginTop: 0,
    display: "flex",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: "brown",
    position: "relative",
  },
  itemcontainer: {
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },

  list: {
    width: 150,
    height: 150,
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
      borderRadius: 15,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 15,
    elevation: 5,
    bottom: 30,
    position: "relative",
  },
  text: {
    position: "relative",
    paddingLeft: 150,
  },
});
