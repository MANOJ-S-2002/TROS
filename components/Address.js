import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import { TextInput,Text, View, StyleSheet,ImageBackground, Button, Alert } from "react-native";
import { withNavigation } from 'react-navigation'
import bg from "../images/bg.jpg";


const image = bg
export class Address extends Component {

    switchPage = () => this.props.navigation.navigate('pay');

    constructor() {
        super();
        this.state = {
            name: " ",
            number: " ",
            pincode: " ",
            address: " ",
            landmark: " ",
            country_state: " "
        };
    }
    Submit() {
        console.log(this.state);
    }

    render() {
        // const { navigation } = this.props.navigation;
        return (
            <ImageBackground style={styles.backgroundImage} sizeMode='cover' source={image}>

            
            <View style={styles.container}>
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
          ADDRESS
        </Text>
                
                <TextInput
                    placeholder="Enter name"
                    onChange={(text) => {
                        this.setState({ name: text });
                    }}
                    style={styles.card}
                />
                <TextInput
                    placeholder="Enter number"
                    onChange={(text) => {
                        this.setState({ number: text });
                    }}
                    style={styles.card}
                />
                <TextInput
                    placeholder="  Enter pincode"
                    onChange={(text) => {
                        this.setState({ pincode: text });
                    }}
                    style={styles.card}

                  
                />
                <TextInput
                    placeholder="  Enter address"
                    onChange={(text) => {
                        this.setState({ address: text });
                    }}
                    style={styles.card}
                />

                <TextInput
                    placeholder="  Enter landmark"
                    onChange={(text) => {
                        this.setState({ landmark: text });
                    }}
                    style={styles.card}
                />

                <TextInput
                    placeholder="  Enter state"
                    onChange={(text) => {
                        this.setState({ country_state: text });
                    }}
                    style={styles.card}
                />
                <Button
                    title="Continue"
                    onPress={this.switchPage}
                    color="orange"
                    

                />
            </View>
            </ImageBackground>
        );
    }
}

export default withNavigation(Address);

const styles = StyleSheet.create({
    container: {
        display: "flex",
        // backgroundColor: "white",
        alignItems: "center",
        // justifyContent: "center",
        width: '100%',
        paddingTop: 50,

    },
    card: {
        borderWidth: 3,
        borderColor: "black",
        width: '95%',
        height: 50,
        marginBottom: 5,
        borderRadius: 5,
        padding: 5,
        backgroundColor: "#f2eaea"
    },
    backgroundImage: {
        paddingTop: 50,
        width: '100%',
        height: 'auto',
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // opacity:0.8
      },
});
