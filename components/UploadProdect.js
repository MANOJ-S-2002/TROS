import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TextInput, Button } from "react-native-paper";

import { AntDesign } from "@expo/vector-icons";

export default function UploadProdect({ navigation}) {
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}> */}
      {/* <AntDesign name="arrowleft" size={30} color="black" style={styles.headericon} /> */}
      {/* <Text style={styles.headerphoto}>ADD PHOTO</Text> */}
      {/* <Text style={styles.headerskip}>SKIP</Text> */}
      {/* </View> */}
      <View style={styles.content}>
        <Text style={styles.instructions1}>
          Upload and mention details below
        </Text>
        <TouchableOpacity onPress={openImagePickerAsync}>
          <Image
            source={{
              uri: "https://cdn0.iconfinder.com/data/icons/interface-10/128/_add_image-512.png",
            }}
            style={styles.logos}
          />
        </TouchableOpacity>
        <View style={styles.detailsContainer}>

        <TextInput
          style={styles.input}
          mode="outlined"
          label="Enter Price"
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          secureTextEntry
          label="About"
        />
        
        <Button
          style={{color: "white",margin: 10 }}
          mode="contained"
          onPress={() => navigation.navigate("Welcome To TROS")}
        >
          Submit
        </Button>
      </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 300,
    height: 50,
    marginHorizontal: 25,
    fontSize: 16,
    borderRadius: 25,
  },
  logos: {
    width: 300,
    height: 265,
    marginLeft: 15,
    marginBottom: 5,
    marginTop: 5,
  },

  instructions1: {
    color: "#888",
    fontSize: 18,
    justifyContent: "center",
    textAlign: "center",
    marginTop: 15,
    marginHorizontal: 20,
    marginLeft: 28,
    marginBottom: 5,
    marginTop: 15,
    justifyContent: "center",
    textAlign: "center",
  },

  detailsContainer: {
    backgroundColor: `gray`,
    padding: 10,
    // flex: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  // header: {
  //     width: '100%',
  //     height: 100,
  //     flexDirection: 'row',
  //     backgroundColor: '#51d1af',
  //     justifyContent: 'space-around',
  // },

  headericon: {
    marginLeft: 15,
    marginTop: 50,
  },

  headerphoto: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
  },

  // headerskip: {
  //     fontSize: 20,
  //     fontWeight: 'bold',
  //     marginLeft: 250,
  //     marginTop: -10
  // },
});
