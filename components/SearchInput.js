import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const SearchInput = () => {
  return (
    <View style={styles.input}>
      <EvilIcons name="search" size={24} color="black" />
      <TextInput placeholder="search for the product " />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    padding: 3,
    borderRadius: 10,
  },
});
