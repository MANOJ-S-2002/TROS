import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import shirt from "../images/shirt1.jpg";
const Aboutus = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}
            >
              About us
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "#005114",
                  padding: 5,
                  textAlign: "center",
                }}
              >
                THE TROS
              </Text>
            </View>

            <View>
              <Image
                source={shirt}
                style={{
                  height: 300,
                  width: 350,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#D73762",
                  padding: 5,
                }}
              >
                Our Mission
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 15, padding: 10 }}>
                To delivery the clothes to the Costumers
                directly by the shop . 
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#D73760",
                  padding: 5,
                }}
              >
                Steps to Follow
              </Text>
            </View>
            <View
              style={{
                padding: 5,
              }}
            >
              <Text style={styles.steps}>
                1.<Text style={styles.highLight}> Login/Signup</Text> to the
                TROS
              </Text>
              <Text style={styles.steps}>
                2.Select the Items from the catogeries{" "}
                <Text style={styles.highLight}> shirts</Text> and
                <Text style={styles.highLight}> Tshirts</Text>
              </Text>
              <Text style={styles.steps}>
                3.Now place the <Text style={styles.highLight}> order</Text>{" "}
              </Text>
              <Text style={styles.steps}>
                4. Finally a make{" "}
                <Text style={styles.highLight}> payment </Text> through Debit
                Card or COD
              </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#D73762",
                  padding: 5,
                  textAlign: "center",
                }}
              >
                Contact us
              </Text>
            </View>
            <View style={styles.contact}>
              <View>
                <Text style={styles.InputHighLight}>Email :</Text>
                <TextInput
                  style={styles.input}
                  mode="outlined"
                  label="Enter Email"
                  style={{ marginLeft: 0 }}
                />
              </View>
              <View>
                <Text style={styles.InputHighLight}>Message :</Text>
                <TextInput
                  style={styles.input}
                  mode="outlined"
                  label="Enter Message"
                  style={{ height: 150, marginLeft: 0 }}
                />
              </View>
              <View>
                <Button
                  style={{
                    margin: 10,
                    backgroundColor: "#005114",
                    marginLeft: 0,
                  }}
                  mode="contained"
                >
                  Submit
                </Button>
              </View>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#D73762",
                  padding: 5,
                }}
              >
                Follow us on
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-around",
                backgroundColor: "#f6f6f6",
              }}
            >
              <Pressable>
                <Ionicons
                  name="logo-facebook"
                  style={{ color: "#4267B2", fontSize: 30 }}
                />
              </Pressable>
              <Pressable>
                <Ionicons
                  name="logo-instagram"
                  style={styles.icons}
                  style={{ color: "#8a3ab9", fontSize: 30 }}
                />
              </Pressable>
              <Pressable>
                <Ionicons
                  name="logo-twitter"
                  style={{ color: "#1DA1F2", fontSize: 30 }}
                />
              </Pressable>
              <Pressable>
                <Ionicons
                  name="logo-github"
                  style={{ color: "#333", fontSize: 30 }}
                />
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Aboutus;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    // backgroundColor: "#f6f6f6",
  },
  steps: {
    padding: 4,
  },
  highLight: {
    color: "#2EA2C1",
    fontSize: 17,
  },
  input: {
    width: 300,
    height: 40,
    marginHorizontal: 25,
  },
  contact: {
    padding: 5,
  },
  InputHighLight: {
    padding: 3,
    fontSize: 17,
    color: "#005114",
    fontWeight: "bold",
  },
});
