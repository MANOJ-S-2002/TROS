import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Platform,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';


export default class Rating extends Component {
    constructor() {
        super();
        this.state = {
            Default_Rating: 1,
            Max_Rating: 5,
        };

        this.Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';


        this.Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
    }
    UpdateRating(key) {
        this.setState({ Default_Rating: key });
    }
    render() {
        let React_Native_Rating_Bar = [];
        for (var i = 1; i <= this.state.Max_Rating; i++) {
            React_Native_Rating_Bar.push(
                <TouchableOpacity
                    activeOpacity={0.7}
                    key={i}
                    onPress={this.UpdateRating.bind(this, i)}>
                    <Image
                        style={styles.StarImage}
                        source={
                            i <= this.state.Default_Rating
                                ? { uri: this.Star }
                                : { uri: this.Star_With_Border }
                        }
                    />
                </TouchableOpacity>
            );
        }
        return (
            <View style={styles.MainContainer}>
                <Text style={styles.textStyle}>Rating by customer</Text>
                <View style={styles.childView}>{React_Native_Rating_Bar}</View>

                <Text style={styles.textStyle}>
                    {this.state.Default_Rating} / {this.state.Max_Rating}
                </Text>

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button}
                    onPress={() => alert(this.state.Default_Rating)}>
                    <Text>Get Selected Value</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
    },
    childView: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    button: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
        padding: 15,
        backgroundColor: '#8ad24e',
    },
    StarImage: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 23,
        color: '#000',
    },
});