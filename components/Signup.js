import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { TextInput, Button } from "react-native-paper";


const image = { uri: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }
export default function Signup({ navigation }) {
  return (
    <ImageBackground style={styles.image} source={image} resizeMode="cover">
      <View style={styles.signUpContainer}>
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
    backgroundColor: `gray`,
    padding: 10,
    // flex: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {

    height: 'auto',
    width: 'auto',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  row1: {
    width: 300,
    height: 50,
    marginHorizontal: 25,
    fontSize: 16,
    borderRadius: 25,
  },
});
