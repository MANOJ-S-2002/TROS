import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  Button,
  Alert,
} from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import { NavigationContainer } from "@react-navigation/native";
import bg from "../images/bg.jpg";
import { icons, COLORS, SIZES, FONTS } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

//ADD localhost address of your server
const API_URL = "http://localhost:3000";
const image = bg;

const PaymentModes = ( {navigation}) => {
  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { clientSecret, error } = await response.json();
    return { clientSecret, error };
  };

  const handlePayPress = async () => {
    //1.Gather the customer's billing information (e.g., email)
    if (!cardDetails?.complete || !email) {
      // Alert.alert("PAYMENT SUCCESSFULL");
      navigation.navigate("last")
      return;
    }
    const billingDetails = {
      email: email,
    };
    //2.Fetch the intent client secret from the backend
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();
      //2. confirm the payment
      if (error) {
        console.log("Unable to process payment");
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: billingDetails,
        });
        if (error) {
          alert(`Payment Confirmation Error ${error.message}`);
        } else if (paymentIntent) {
          alert("Payment Successful");
          console.log("Payment successful ", paymentIntent);
        }
      }
    } catch (e) {
      console.log(pay);
    }
    //3.Confirm the payment with the card details
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      sizeMode="cover"
      source={image}
    >
      <View style={styles.container}>
        <Text
          style={{
            margin: 80,
            paddingLeft: 30,
            borderRadius: 7,
            fontSize: 30,
            fontWeight: "bold",
            // color: "black",
          }}
        >
          PAYMENT
        </Text>

        <TextInput
          autoCapitalize="none"
          placeholder="E-mail"
          keyboardType="email-address"
          onChange={(value) => setEmail(value.nativeEvent.text)}
          style={styles.input}
        />
        <CardField
          postalCodeEnabled={true}
          placeholder={{
            number: "4242 4242 4242 4242",
          }}
          cardStyle={styles.card}
          style={styles.cardContainer}
          onCardChange={(cardDetails) => {
            setCardDetails(cardDetails);
          }}
        />

        <Button
          onPress={handlePayPress}
          // onPress={navigation.navigate("last")}

          color="orange"
          title="Pay"
          // mode="contained"
          disabled={loading}
        />

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
            <Text style={{ color: COLORS.white, ...FONTS.h2 }}>cancel</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity></TouchableOpacity> */}
        </View>

        <View>
          
        </View>
        {/* <Button      title="Pay" disabled={loading} /> */}
      </View>
    </ImageBackground>
  );
};
export default PaymentModes;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: 50,
    // alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    margin: 20,
  },
  input: {
    backgroundColor: "#efefefef",

    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
    // backgroundColor: "orange",
  },

  backgroundImage: {
    // paddingTop: 50,
    width: "100%",
    height: "auto",
    flex: 1,
    // justifyContent: "center",
    // alignItems: 'center',
  },
});
