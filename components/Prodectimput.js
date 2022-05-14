import React, { Component } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";
import UploadProdect from './UploadProdect'

export class Prodectinput extends Component {
    constructor() {
        super();
        this.state = {
            title: " ",
            price: " ",
            description: " "
        };
    }
    Submit() {
        console.log(this.state);
    }

    render() {
        return (
            <View style={styles.container}>
                <UploadProdect />
                <TextInput
                    placeholder="  enter title"
                    onChange={(text) => {
                        this.setState({ title: text });
                    }}
                    style={{
                        borderWidth: 3,
                        borderColor: "black",
                        width: "95%",
                        height: 50,
                        marginBottom: 5,
                        borderRadius: 5,
                        padding: 5,
                        backgroundColor: "#f2eaea"
                    }}
                />
                <TextInput
                    placeholder="  enter price"
                    onChange={(text) => {
                        this.setState({ price: text });
                    }}
                    style={{
                        borderWidth: 3,
                        borderColor: "black",
                        width: '95%',
                        height: 50,
                        marginBottom: 5,
                        borderRadius: 5,
                        padding: 5,
                        backgroundColor: "#f2eaea"
                    }}
                />
                <TextInput
                    placeholder="  enter description"
                    onChange={(text) => {
                        this.setState({ description: text });
                    }}
                    style={{
                        borderWidth: 3,
                        borderColor: "black",
                        width: '95%',
                        height: 50,
                        marginBottom: 5,
                        borderRadius: 5,
                        alignItems: "center",
                        padding: 5,
                        backgroundColor: "#f2eaea"
                    }}
                />
                <Button
                    title="submit"
                    onPress={() => {
                        this.Submit();
                    }}
                />
            </View>
        );
    }
}

export default Prodectinput;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
    }
});