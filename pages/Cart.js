import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../pages/Header';
import ItemsContainer from '../pages/ItemsContainer';
import Footer from './Footer';

export default function Cart(props) {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <ItemsContainer />
        <Footer navigation={props.navigation} />
      </View>

    );
  }
// }












// import React from 'react';
// import { Text, View, SafeAreaView } from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import CartFooter from '../pages/CartFooter'
// import Item from './Item';
// import ItemsContainer from './ItemsContainer';

// const Cart = () => {
//   return (
//     <SafeAreaProvider style={{ justifyContent: 'space-evenly', alignItems: 'center', }}>
//       <SafeAreaView style={styles.headerStyle}>
//         <View>
//           <View style={{ flex: 4, }}>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 2, }} >
//               <Icon name="close" size={35} color="#a8a9ad" />
//               <Text style={{ fontSize: 18 }}>Shopping Cart</Text>
//               <Text>Empty</Text>
//             </View>
//             <Item />
//             {/* <ItemsContainer /> */}
//           </View>
//           <CartFooter />
//         </View>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   )
// };

// const styles = {
  // containerStyle: {
  //   flex: 1,
  //   // paddingRight: 15,
  //   // paddingLeft: 15,
  //   // borderTopWidth: 1,
  //   borderColor: '#e2e2e2',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // headerStyle: {
    // flex: 1,
    // elevation: 2,
    // marginTop: 20,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderBottomWidth: 1,
    // borderColor: '#e2e2e2'
//   }
// };

// export default Cart;







// import * as React from "react";
// import { StyleSheet, Text, SafeAreaView, StatusBar, View } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// import SearchInput from "../components/SearchInput";
// import CartHeader from './components/CartHeader';

// function Cart({ navigation }) {
//   return (
//     <SafeAreaView style={{ flex: 1, paddingTop: 5, }}>

//       <CartHeader />
//       {/* <View style={styles.row1}>
//         <Text style={{ fontSize: 20, }}>My Cart</Text>
//         <SearchInput />
//         <Icon name="shopping-cart" size={30} color={"brown"} />
//       </View>
//       <View style={styles.row2}>
//         <Text>
//           Cart Items
//       </Text>
//       </View> */}
//     </SafeAreaView>
//   );
// }
// export default Cart

// const styles = StyleSheet.create({
//   row1: {
//     margin: 5,
//     fontSize: 35,
//     backgroundColor: '#008b8b',
//     justifyContent: "space-between",
//     flexDirection: 'row',
//     padding: 20,
//     alignItems: 'center',
//   },
//   row2: {
//     margin: 5,
//     backgroundColor: 'rgba(52, 52, 52, 0.8)',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },

// });