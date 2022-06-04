import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Dimensions,
    Image,
} from "react-native";
import COLORS from "../src/color";

import {
    FontAwesome,
    MaterialIcons,
    AntDesign,
} from "react-native-vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { FlatList } from "react-native-gesture-handler";
import fruit from "../src/Fruit";

const width = Dimensions.get("screen").width / 2 - 30;
const Pants= ({ navigation }) => {
    //create categories
    const categories = ["S","M","L","XL"];
    //selecting index in categories

    const [categoryIndex, setCategoryIndex] = React.useState(0);
    // creating component for categories
    const CategoryList = () => {
    return (
        <View style={styles.categorycontainer}>
            {categories.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={0.8}
                    onPress={() => setCategoryIndex(index)}
                >
                    <Text
                        style={[
                            styles.categoryText,
                            categoryIndex == index && styles.categoryTextSelected,
                        ]}
                    >
                        {item}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        );
    };

    //creating cart using FlatType component
    const Cart = ({ fruit }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("Product Details", fruit)}>
                <View style={styles.card}>
                    <View style={{ alignItems: "flex-end" }}>
                        <View
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: fruit.like
                                    ? "rgba(242,42,42,0.2)"
                                    : "rgba(0,0,0,0.2)",
                            }}
                        >
                            <AntDesign
                                name="heart"
                                size={18}
                                color={fruit.like ? COLORS.red : COLORS.dark}
                            />
                        </View>
                    </View>
                    <View style={{ height: 100, alignItems: "center" }}>
                        <Image
                            style={{ flex: 1, resizeMode: "contain" }}
                            source={fruit.img}
                        />
                    </View>
                    <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 20 }}>
                        {fruit.name}
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: 5,
                        }}
                    >
                        <Text style={{ fontSize: 19, fontWeight: "bold" }}>
                            Rs {fruit.price}
                        </Text>
                        <View
                            style={{
                                height: 24,
                                width: 25,
                                backgroundColor: COLORS.green,
                                borderRadius: 8,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    flex: 1,
                                    fontSize: 22,
                                    color: COLORS.white,
                                    fontWeight: "bold",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                +
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingHorizontal: 20,
                backgroundColor: COLORS.white,
            }}
        >
            <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 30 }}>
                        Welcome to
                    </Text>
                    <Text
                        style={{ fontSize: 38, fontWeight: "bold", color: COLORS.green }}
                    >
                TROS
                    </Text>
                </View>
                <FontAwesome onPress={() => navigation.navigate('Cart')}
                    name="shopping-cart"
                    size={28}
                    style={{ marginTop: 30, color: COLORS.dark }}
                />
            </View>
            <View style={{ marginTop: 30, flexDirection: "row" }}>
                <View style={styles.searchContainer}>
                    <FontAwesome name="search" size={25} style={{ marginLeft: 20 }} />
                    <TextInput placeholder="Search" style={styles.input} />
                </View>
                <View style={styles.sortBtn}>
                    <MaterialIcons
                        name="sort"
                        size={30}
                        style={{ color: COLORS.white }}
                    />
                </View>
            </View>
            <CategoryList />
            <FlatList
                columnWrapperStyle={{ justifyContent: "space-between" }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                }}
                numColumns={2}
                data={fruit}
                renderItem={({ item }) => <Cart fruit={item} />}
            />
        </SafeAreaView>
    );
};
export default Pants;

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    searchContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        fontSize: 18,
        fontWeight: "bold",
        color: COLORS.dark,
        flex: 1,
        marginLeft: 10,
    },
    sortBtn: {
        marginLeft: 20,
        height: 50,
        width: 50,
        backgroundColor: COLORS.green,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    categorycontainer: {
        flexDirection: "row",
        marginTop: 30,
        marginBottom: 20,
        justifyContent: "space-between",
    },
    categoryText: {
        fontSize: 14,
        color: "grey",
        fontWeight: "bold",
    },
    categoryTextSelected: {
        color: COLORS.green,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: COLORS.green,
    },
    card: {
        height: 220,
        backgroundColor: COLORS.light,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 10,
    },
});





























// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'

// const Fruits = () => {
//     return (
//         <View style={styles.FruitesContainer}>
//             <Text>Fruits</Text>
//         </View>
//     )
// }

// export default Fruits

// const styles = StyleSheet.create({
//     FruitesContainer: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// })
