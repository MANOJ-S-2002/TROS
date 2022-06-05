import React from "react";
import {
  ScrollView,
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

import Fruits from "../images/shirt1.jpg";
import Pants from "../images/pant.jpg";
import short from "../images/short.jpg";
import Vegetables from "../images/tshirt1.jpg";

// import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SliderData from "./data";

const Home = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const { img, info } = SliderData[index];

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
    <SafeAreaView style={{ paddingBottom: 30 }}>
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
        {/* <Icon
          name="shopping-cart"
          size={30}
          color="#900"
          onPress={() => navigation.navigate("Track")}
        /> */}
      </View>

      {/* slider content */}
      <View style={styles.Container}>
        <View style={{ paddingLeft: 10 }}>
          <TouchableOpacity onPress={preBtnHandle}>
            <AntDesign name="left" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.slider}>
          <View style={{ borderRadius: 15 }}>
            <Image source={img} style={styles.image}></Image>
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

      <ScrollView>
        <View style={styles.maincontainer}>
          <View style={styles.text}>
            <Text style={{ fontSize: 25, color: "white", paddingLeft: 0 }}>
              Catogeries
            </Text>
          </View>
          <View style={styles.itemcontainer}>
            <View style={styles.listcontainer}>
              <TouchableOpacity onPress={() => navigation.navigate("Fruits")}>
                <View style={styles.list}>
                  <Image
                    source={Fruits}
                    style={{ width: 150, height: 150, borderRadius: 15 }}
                  />
                  <Text style={{ fontSize: 20 }}>Shirts </Text>
                </View>
              </TouchableOpacity>
              {/* </View> */}

              {/* <View style={styles.listcontainer}> */}

              <TouchableOpacity onPress={() => navigation.navigate("Pants")}>
                <View style={styles.list}>
                  <Image
                    source={Pants}
                    style={{ width: 150, height: 150, borderRadius: 15 }}
                  />
                  <Text style={{ fontSize: 20 }}>Pants </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.listcontainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Vegetables")}
              >
                <View style={styles.list}>
                  <Image
                    source={Vegetables}
                    style={{ width: 150, height: 150, borderRadius: 15 }}
                  />
                  <Text style={{ fontSize: 20 }}>Tshirts </Text>
                </View>
              </TouchableOpacity>

              {/* </View> */}

              {/* <View style={styles.listcontainer}> */}

              <TouchableOpacity onPress={() => navigation.navigate("Shorts")}>
                <View style={styles.list}>
                  <Image
                    source={short}
                    style={{ width: 150, height: 150, borderRadius: 15 }}
                  />
                  <Text style={{ fontSize: 20 }}>Shorts</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
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
    height: "auto",
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
    width: 280,
    height: 210,
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    marginLeft: 20,
    width: 150,
    color: "white",
  },
  image: {
    borderRadius: 15,
    width: 135,
    height: 135,
    backgroundColor: "white",
  },

  //main conten styles
  maincontainer: {
    width: "auto",
    height: "auto",
    margin: 10,
    borderRadius: 10,
    marginTop: 5,
    display: "flex",
    justifyContent: "space-around",
    boxShadow: "#0000005e",
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
    marginBottom: 20,
  },
  itemcontainer: {
    height: 735,
    // justifyContent: "space-around",
    // flexDirection: "column",
    borderRadius: 10,
    alignItems: "center",
    paddingTop: 30,
    // backgroundColor: "white",
    // justifyContent:"flex-start"
  },
  listcontainer: {
    // height: 1000,
    justifyContent: "space-between",
    flexDirection: "row",
    // borderRadius: 10,
    alignItems: "center",
    // paddingTop: 30,
    // backgroundColor: "white",
    // justifyContent:"flex-start"
  },

  list: {
    width: 150,
    height: 180,
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
    marginHorizontal: 10,
    marginVertical: 20,
  },
  text: {
    position: "relative",
    alignItems: "center",
  },
  // listcontainer:{
  //   // display: "flex",
  //   // flex:1,
  //   width: "100%",
  //   alignItems: "center",
  //   gap:1000,
  // }
});
