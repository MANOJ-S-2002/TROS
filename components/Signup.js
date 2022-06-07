import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import bg from "../images/bg.jpg";

const image = bg;
export default function Signup({ navigation }) {
  return (
    <ImageBackground style={styles.image} source={image} resizeMode="cover">
      <View style={styles.signUpContainer}>
        <Text
          style={{
            // paddingTop: 5,
            margin: 10,
            borderRadius: 7,
            fontSize: 30,
            fontWeight: "bold",
            color: "black",
            // backgroundColor: "orange",
          }}
        >
          SIGN UP
        </Text>
        <TextInput style={styles.row1} mode="outlined" label="Enter Name" />
        <TextInput
          style={styles.row1}
          mode="outlined"
          label="Enter Phone Number"
        />
        <TextInput style={styles.row1} mode="outlined" label="Enter Email" />
        <TextInput
          style={styles.row1}
          mode="outlined"
          secureTextEntry={true}
          label="Password"
          right={<TextInput.Icon name="eye" />}
          // placeholder="Enter Password"
        />
        <Button
          style={{ margin: 10 }}
          mode="contained"
          color="orange"
          onPress={() => navigation.navigate("Login")}
        >
          Signup
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  signUpContainer: {
    // backgroundColor: `gray`,
    padding: 10,
    paddingTop: 120,
    // flex: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "auto",
    width: "auto",
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  row1: {
    width: 300,
    height: 50,
    marginHorizontal: 25,
    fontSize: 16,
    borderRadius: 25,
  },
});
