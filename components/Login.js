import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { TextInput, Button } from "react-native-paper";
import bg from "../images/bg.jpg";

const image = bg

export default function Login({ navigation }) {
  return (
    <ImageBackground style={styles.backgroundImage} sizeMode='cover' source={image}>
      <View style={styles.loginContainer}>
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Enter Email/Number"
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        secureTextEntry
        label="Password"
      />
      <Button
        style={{ margin: 10 }}
        mode="contained"
          onPress={() => navigation.navigate("Home")}
      >
        Login
      </Button>

    
      
      <Text
      style={{ margin: 10 ,borderRadius:7,fontSize:20,fontWeight:"bold",color:"white",backgroundColor:"" }}>New to TROS?</Text>
      <Button
        style={{ margin: 10 }}
        mode="contained"
          onPress={() => navigation.navigate("Signup")}
      >
        Register Here!
      </Button>
    </View>

    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  loginContainer: {
    // backgroundColor: `gray`,
    padding: 10,
    // flex: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    paddingTop: 50,
    width: '100%',
    height: 'auto',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // opacity:0.8
  },
  input: {
    width: 300,
    height: 50,
    marginHorizontal: 25,
    fontSize: 16,
    borderRadius: 25,
    
  },
});
