import React from 'react';
import { View, Text } from 'react-native';
import TotalComp from './TotalComponent';

const Footer = ({ navigation }) => {
    const {
        containerStyle,
        buttonContainerStyle,
        closeButtonStyle,
        checkoutButtonStyle } = styles;
    return (
        <View style={containerStyle}>
            <TotalComp />
            <View style={buttonContainerStyle}>
                <View style={checkoutButtonStyle}>
                    <Text onPress={() => navigation.navigate('Address')} style={{ color: 'black', fontSize: 20, }}>Checkout</Text>
                </View>
            </View>
        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        paddingRight: 15,
        paddingLeft: 15,
        borderTopWidth: 1,
        borderColor: '#e2e2e2',
        backgroundColor: "#b0e0e6",
    },
    buttonContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
    },
    closeButtonStyle: {
        backgroundColor: '#7f8c8d',
        padding: 10,
        paddingRight: 30,
        paddingLeft: 30,
        borderRadius: 3,
    },
    checkoutButtonStyle: {
        backgroundColor: '#32cd32',
        padding: 10,
        paddingRight: 60,
        paddingLeft: 60,
        borderRadius: 8,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export default Footer;