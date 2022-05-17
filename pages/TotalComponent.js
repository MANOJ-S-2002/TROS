import React from 'react';
import { View, Text } from 'react-native';

const TotalComponent = () => {
    const { containerStyle, totalStyle } = styles;
    return (
        <View style={containerStyle}>
            <View style={totalStyle}>
                <Text>Total  </Text>
                <Text>Rs.400/-</Text>
            </View>
        </View>
    );
};

const styles = {
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15
    },
    goodsStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    totalStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
};


export default TotalComponent;