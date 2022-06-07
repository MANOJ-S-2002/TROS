import React from "react";
import { View, StyleSheet, ImageBackground,Keyboard } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import bg from "../images/bg.jpg";

const image = bg;
const Signup = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    email: "",
    fullname: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input a valid email", "email");
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError("Please input fullname", "fullname");
      isValid = false;
    }

    if (!inputs.phone) {
      handleError("Please input phone number", "phone");
      isValid = false;
    }

    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError("Min password length of 5", "password");
      isValid = false;
    }

    if (isValid) {
      navigation.navigate('Login');
    }
  };

  // const register = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     try {
  //       setLoading(false);
  //       AsyncStorage.setItem('userData', JSON.stringify(inputs));
  //       navigation.navigate('LoginScreen');
  //     } catch (error) {
  //       Alert.alert('Error', 'Something went wrong');
  //     }
  //   }, 3000);
  // };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
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
        <TextInput
          style={styles.row1}
          mode="outlined"
          onChangeText={(text) => handleOnchange(text, "fullname")}
          onFocus={() => handleError(null, "fullname")}
          iconName="account-outline"
          label="Full Name"
          placeholder="Enter your full name"
          error={errors.fullname}
        />
        <TextInput
          style={styles.row1}
          mode="outlined"
          keyboardType="numeric"
          onChangeText={(text) => handleOnchange(text, "phone")}
          onFocus={() => handleError(null, "phone")}
          iconName="phone-outline"
          label="Phone Number"
          placeholder="Enter your phone no"
          error={errors.phone}
        />
        <TextInput
          style={styles.row1}
          mode="outlined"
          onChangeText={(text) => handleOnchange(text, "email")}
          onFocus={() => handleError(null, "email")}
          iconName="email-outline"
          label="Email"
          placeholder="Enter your email address"
          error={errors.email}
        />
        <TextInput
          style={styles.row1}
          mode="outlined"
          secureTextEntry={true}
          onChangeText={(text) => handleOnchange(text, "password")}
          onFocus={() => handleError(null, "password")}
          iconName="lock-outline"
          label="Password"
          placeholder="Enter your password"
          error={errors.password}
          password
          right={<TextInput.Icon name="eye" />}
          // placeholder="Enter Password"
        />
        <Button
          style={{ margin: 10 }}
          mode="contained"
          color="orange"
          onPress= {validate}
          // onPress={ () => navigation.navigate("Login") }
        >
          Signup
        </Button>
      </View>
    </ImageBackground>
  );
};

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
export default Signup;
