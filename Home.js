import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from "./constants";
const Home = ({ navigation }) => {
  // Dummy Datas

  const initialCurrentLocation = {
    streetName: "Loyola College",
    gps: {
      latitude: 13.0644,
      longitude: 80.2338,
    },
  };

  const categoryData = [
    // {
    //   id: 1,
    //   name: "Shirts",
    //   icon: icons.rice_bowl,
    // },
    // {
    //   id: 2,
    //   name: "Pants",
    //   icon: icons.noodle,
    // },
    // {
    //   id: 3,
    //   name: "Tshirts",
    //   icon: icons.hotdog,
    // },
    // {
    //   id: 4,
    //   name: "Shorts",
    //   icon: icons.salad,
    // },
    // {
    //   id: 5,
    //   name: "Burgers",
    //   icon: icons.hamburger,
    // },
    // {
    //   id: 6,
    //   name: "Pizza",
    //   icon: icons.pizza,
    // },
    // {
    //   id: 7,
    //   name: "Snacks",
    //   icon: icons.fries,
    // },
    // {
    //   id: 8,
    //   name: "Sushi",
    //   icon: icons.sushi,
    // },
    // {
    //   id: 9,
    //   name: "Desserts",
    //   icon: icons.donut,
    // },
    // {
    //   id: 10,
    //   name: "Drinks",
    //   icon: icons.drink,
    // },
  ];

  // price rating
  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  const restaurantData = [
    {
      id: 1,
      name: "SARAVANA STORES",
      rating: 4.8,
      categories: [5, 7],
      priceRating: affordable,
      photo: images.saravana,
      duration: "30 - 45 min",
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
      courier: {
        avatar: images.avatar_2,
        name: "Andrew",
      },
      menu: [
        {
          menuId: 1,
          name: "Shirts",
          photo: images.shirt,
          description: "Shirts are with good quality",
          // calories: 200,
          price: 700,
        },
        {
          menuId: 2,
          name: "Tshirts",
          photo: images.tshirt,
          description: "Tshirts are with good quality",
          // calories: 250,
          price: 600,
        },
        {
          menuId: 3,
          name: "Pants",
          photo: images.pant,
          description: "Pants are with good quality",
          // calories: 194,
          price: 800,
        },
        {
          menuId: 3,
          name: "Shorts",
          photo: images.short,
          description: "Shorts are with good quality",
          // calories: 194,
          price: 400,
        },
      ],
    },
    {
      id: 2,
      name: "POTHYS",
      rating: 4.8,
      categories: [2, 4, 6],
      priceRating: expensive,
      photo: images.pothys,
      duration: "15 - 20 min",
      location: {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
      },
      courier: {
        avatar: images.avatar_2,
        name: "Jackson",
      },
      menu: [
        {
          menuId: 1,
          name: "Shirts",
          photo: images.shirt,
          description: "Shirts are with good quality",
          // calories: 200,
          price: 1000,
        },
        {
          menuId: 2,
          name: "Tshirts",
          photo: images.tshirt,
          description: "Tshirts are with good quality",
          // calories: 250,
          price: 500,
        },
        {
          menuId: 3,
          name: "Pants",
          photo: images.pant,
          description: "Pants are with good quality",
          // calories: 194,
          price: 800,
        },
        {
          menuId: 3,
          name: "Shorts",
          photo: images.short,
          description: "Shorts are with good quality",
          // calories: 194,
          price: 350,
        },
      ],
    },
    {
      id: 3,
      name: "PETER ENGLAND",
      rating: 4.8,
      categories: [3],
      priceRating: expensive,
      photo: images.peter,
      duration: "20 - 25 min",
      location: {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
      },
      courier: {
        avatar: images.avatar_3,
        name: "James",
      },
      menu: [
        {
          menuId: 1,
          name: "Shirts",
          photo: images.green,
          description: "Shirts are with good quality",
          // calories: 200,
          price: 650,
        },
        {
          menuId: 2,
          name: "Tshirts",
          photo: images.tshirt,
          description: "Tshirts are with good quality",
          // calories: 250,
          price: 700,
        },
        {
          menuId: 3,
          name: "Pants",
          photo: images.pant,
          description: "Pants are with good quality",
          // calories: 194,
          price: 750,
        },
        {
          menuId: 3,
          name: "Shorts",
          photo: images.short,
          description: "Shorts are with good quality",
          // calories: 194,
          price: 350,
        },
      ],
    },
    {
      id: 4,
      name: "HM",
      rating: 4.8,
      categories: [8],
      priceRating: expensive,
      photo: images.hm,
      duration: "10 - 15 min",
      location: {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
      },
      courier: {
        avatar: images.avatar_4,
        name: "Ahmad",
      },
      menu: [
        {
          menuId: 1,
          name: "Shirts",
          photo: images.shirt,
          description: "Shirts are with good quality",
          // calories: 200,
          price: 740,
        },
        {
          menuId: 2,
          name: "Tshirts",
          photo: images.tshirt,
          description: "Tshirts are with good quality",
          // calories: 250,
          price: 480,
        },
        {
          menuId: 3,
          name: "Pants",
          photo: images.pant,
          description: "Pants are with good quality",
          // calories: 194,
          price: 680,
        },
        {
          menuId: 3,
          name: "Shorts",
          photo: images.short,
          description: "Shorts are with good quality",
          // calories: 194,
          price: 380,
        },
      ],
    },
    {
      id: 5,
      name: "VAN HAUSEN",
      rating: 4.8,
      categories: [1, 2],
      priceRating: affordable,
      photo: images.van,
      duration: "15 - 20 min",
      location: {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
      },
      courier: {
        avatar: images.avatar_4,
        name: "Muthu",
      },
      menu: [
        {
          menuId: 1,
          name: "Shirts",
          photo: images.shirt,
          description: "Shirts are with good quality",
          // calories: 200,
          price: 500,
        },
        {
          menuId: 2,
          name: "Tshirts",
          photo: images.tshirt,
          description: "Tshirts are with good quality",
          // calories: 250,
          price: 350,
        },
        {
          menuId: 3,
          name: "Pants",
          photo: images.pant,
          description: "Pants are with good quality",
          // calories: 194,
          price: 550,
        },
        {
          menuId: 3,
          name: "Shorts",
          photo: images.short,
          description: "Shorts are with good quality",
          // calories: 194,
          price: 250,
        },
      ],
    },
    {
      id: 6,
      name: "ALLEN SOLLY ",
      rating: 4.9,
      categories: [9, 10],
      priceRating: affordable,
      photo: images.allen,
      duration: "35 - 40 min",
      location: {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
      },
      courier: {
        avatar: images.avatar_1,
        name: "Jessie",
      },
      menu: [
        {
          menuId: 1,
          name: "Shirts",
          photo: images.shirt,
          description: "Shirts are with good quality",
          // calories: 200,
          price: 800,
        },
        {
          menuId: 2,
          name: "Tshirts",
          photo: images.tshirt,
          description: "Tshirts are with good quality",
          // calories: 250,
          price: 600,
        },
        {
          menuId: 3,
          name: "Pants",
          photo: images.pant,
          description: "Pants are with good quality",
          // calories: 194,
          price: 450,
        },
        {
          menuId: 3,
          name: "Shorts",
          photo: images.short,
          description: "Shorts are with good quality",
          // calories: 194,
          price: 350,
        },
      ],
    },
  ];

  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation
  );

  function onSelectCategory(category) {
    //filter restaurant
    let restaurantList = restaurantData.filter((a) =>
      a.categories.includes(category.id)
    );

    setRestaurants(restaurantList);

    setSelectedCategory(category);
  }

  function getCategoryNameById(id) {
    let category = categories.filter((a) => a.id == id);

    if (category.length > 0) return category[0].name;

    return "";
  }

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", height: 50 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.pin}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              backgroundColor: COLORS.lightGray3,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
            }}
          >
            {/* <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text> */}
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.basket}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderMainCategories() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(item)}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGray,
            }}
          >
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 60,
                height: 30,
              }}
            />
          </View>

          <Text
            style={{
              marginTop: SIZES.padding,
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              ...FONTS.body5,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ padding: SIZES.padding * 2 }}>
        <Text style={{ ...FONTS.h1 }}>Welcome To</Text>
        <Text style={{ ...FONTS.h1 }}>TROS</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
        />
      </View>
    );
  }

  function renderRestaurantList() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{ marginBottom: SIZES.padding * 2 }}
        onPress={() =>
          navigation.navigate("Restaurant", {
            item,
            currentLocation,
          })
        }
      >
        {/* Image */}
        <View
          style={{
            marginBottom: SIZES.padding,
          }}
        >
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 200,
              borderRadius: SIZES.radius,
            }}
          />

          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 50,
              width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              ...styles.shadow,
            }}
          >
            <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
          </View>
        </View>

        {/* Restaurant Info */}
        <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

        <View
          style={{
            marginTop: SIZES.padding,
            flexDirection: "row",
          }}
        >
          {/* Rating */}
          <Image
            source={icons.star}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.primary,
              marginRight: 10,
            }}
          />
          <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

          {/* Categories */}
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
            }}
          >
            {item.categories.map((categoryId) => {
              return (
                <View style={{ flexDirection: "row" }} key={categoryId}>
                  <Text style={{ ...FONTS.body3 }}>
                    {getCategoryNameById(categoryId)}
                  </Text>
                  <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> </Text>
                </View>
              );
            })}

            {/* Price */}

            {/* {[1, 2, 3].map((priceRating) => (
              <Text
                key={priceRating}
                style={{
                  ...FONTS.body3,
                  color:
                    priceRating <= item.priceRating
                      ? COLORS.black
                      : COLORS.darkgray,
                }}
              >
                $
              </Text>
            ))} */}
          </View>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        data={restaurants}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
