import React from "react";
import { View, StyleSheet, Text, ImageBackground, StatusBar } from "react-native";
import { TextInput, Button } from "react-native-paper";
import apple from "../assets/apple.jpg";


// const image = { uri: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }

export default function PartnerLogin({ navigation }) {
    return (


        <ImageBackground style={styles.backgroundImage} sizeMode='cover' source={apple}>
            {/* <Text style={{ alignItems: 'center', fontSize: 30, fontWeight: 'bold', color: 'white', marginBottom: 30, backgroundColor: 'rgba(101, 92, 92, 0.91)', borderRadius: 10, }}>Login To Veggies</Text> */}
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
                    onPress={() => navigation.navigate("UploadProduct")}
                >
                    Login
                </Button>
                <Text>New to TROS?</Text>
                <Button
                    style={{ margin: 10 }}
                    mode="outlined"
                    onPress={() => navigation.navigate("PartnerSignup")}
                >
                    Register Here!
                </Button>
            </View>

        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    loginContainer: {
        backgroundColor: `gray`,
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
    },
    input: {
        width: 300,
        height: 50,
        marginHorizontal: 25,
        fontSize: 16,
        borderRadius: 25,
    },
});
