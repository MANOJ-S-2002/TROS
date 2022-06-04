import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import COLORS from "../src/const/color";
// import Veggie from "../src/const/Veggie";
import fruit from "../src/ShirtData";

import {
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Ionicons,
} from "react-native-vector-icons";
// import { NavigationActions } from "@react-navigation/native";
const FruitDetails = ({ navigation, route }) => {
  const fruit = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={28}
          onPress={() => navigation.goBack()}
        />
        <AntDesign name="shoppingcart" size={28} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={fruit.img} style={{ resizeMode: "contain", flex: 1 }} />
      </View>
      <View style={styles.detailsCotainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <View style={styles.line} />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Best Choice</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>{fruit.name}</Text>
          <View style={styles.priceTag}>
            <Text
              style={{
                marginLeft: 20,
                fontWeight: "bold",
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              Rs{fruit.price}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>About</Text>
          <Text
            style={{
              color: "grey",
              fontSize: 16,
              lineHeight: 22,
              marginTop: 20,
            }}
          >
            {fruit.about}
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.borderBtn}>
              <Text style={styles.borderBtnText}>-</Text>
            </View>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, marginHorizontal: 10 }}
            >
              {" "}
              1
            </Text>
            <View style={styles.borderBtn}>
              <Text style={styles.borderBtnText}>+</Text>
            </View>
          </View>
          <View style={styles.buyBtn}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: COLORS.white }}
            >
              Buy
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsCotainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 20,
    paddingTop: 20,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: "center",
  },
  borderBtn: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  borderBtnText: {
    fontWeight: "bold",
    fontSize: 28,
  },
  buyBtn: {
    backgroundColor: COLORS.green,
    height: 50,
    width: 150,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FruitDetails;
