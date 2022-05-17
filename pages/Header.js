import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import data from '../components/data';
import SearchInput from '../components/SearchInput';
import data1 from '../components/data';

const Header = () => {
    return (
        <View style={styles.headerStyle}>
            <Text style={{ fontSize: 18 }}>My Cart</Text>
            <SearchInput />
            <View>
                <Text style={{ paddingLeft: 15, backgroundColor: 'white', borderRadius: 20, }} >{data1.length}</Text>
                <Icon name="cart" size={30} color={'brown'} style={{ marginRight: 8 }} />

            </View>
        </View>
    );
};

const styles = {
    headerStyle: {
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#20b2aa",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 25,
        // paddingBottom: 15,

    }
};

export default Header;