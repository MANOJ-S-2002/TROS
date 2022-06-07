import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Keyboard,
  Alert,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import image from "../images/bg.jpg";

// export default function Login({ navigation }) {
const Login = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({ email: "", password: "" });
  const [errors, setErrors] = React.useState({});
  // const [loading, setLoading] = React.useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    }
    if (isValid) {
      navigation.navigate("User Profile");
      // login();
    }
  };

  
  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      sizeMode="cover"
      source={image}
    >
      <View style={styles.loginContainer}>
        <Text
          style={{
            margin: 10,
            borderRadius: 7,
            fontSize: 30,
            fontWeight: "bold",
            color: "black",
            backgroundColor: "",
          }}
        >
          LOGIN
        </Text>
        <TextInput
          style={styles.input}
          mode="outlined"
          onChangeText={(text) => handleOnchange(text, "email")}
          onFocus={() => handleError(null, "email")}
          error={errors.email}
          placeholder=" email"
          label="Enter your Email"
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          secureTextEntry
          label=" Enter your Password"
          onChangeText={(text) => handleOnchange(text, "password")}
          onFocus={() => handleError(null, "password")}
          placeholder=" password"
          error={errors.password}
        />
        <Button
          style={{ margin: 10 }}
          mode="contained"
          color="orange"
          onPress={() => validate()}
        >
          Login
        </Button>

        <Text
          style={{
            margin: 10,
            borderRadius: 7,
            fontSize: 20,
            fontWeight: "bold",
            paddingTop: 130,

            color: "black",
            // backgroundColor: "white",
          }}
        >
          NEW TO TROS?
        </Text>
        <Button
          style={{ margin: 10 }}
          mode="contained"
          color="orange"
          onPress={() => navigation.navigate("Signup")}
        >
          Register Here!
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    // backgroundColor: `gray`,
    padding: 10,
    paddingTop: 150,

    // flex: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    // paddingTop: 50,
    width: "100%",
    height: "auto",
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    // opacity:0.8
  },
  input: {
    width: 300,
    height: 50,

    marginHorizontal: 25,
    margin: 10,
    fontSize: 16,
    borderRadius: 25,
  },
});

export default Login;
