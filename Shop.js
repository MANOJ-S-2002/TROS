import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  TouchableHighlight,
  KeyboardAvoidingView,
} from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";

import { icons, COLORS, SIZES, FONTS } from "./constants";
import SearchInput from "./components/SearchInput";

const Shop = ({ route, navigation }) => {
  const scrollX = new Animated.Value(0);
  const [Shop, setShop] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [orderItems, setOrderItems] = React.useState([]);

  const categories = ["Small", "Medium", "Large", "ExtraLarge"];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const CategoryList = ({ navigation }) => {
    return (
      <View style={styles.categoryListContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <View>
              <Text
                style={{
                  ...styles.categoryListText,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.primary
                      : COLORS.grey,
                }}
              >
                {item}
              </Text>
              {selectedCategoryIndex == index && (
                <View
                  style={{
                    height: 3,
                    width: 30,
                    backgroundColor: COLORS.primary,
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  React.useEffect(() => {
    let { item, currentLocation } = route.params;

    setShop(item);
    setCurrentLocation(currentLocation);
  });

  var [isPress, setIsPress] = React.useState(false);

  var touchProps = {
    activeOpacity: 1,
    underlayColor: "blue", // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log("HELLO"), // <-- "onPress" is apparently required
  };

  function editOrder(action, menuId, price) {
    let orderList = orderItems.slice();
    let item = orderList.filter((a) => a.menuId == menuId);

    if (action == "+") {
      if (item.length > 0) {
        let newQty = item[0].qty + 1;
        item[0].qty = newQty;
        item[0].total = item[0].qty * price;
      } else {
        const newItem = {
          menuId: menuId,
          qty: 1,
          price: price,
          total: price,
        };
        orderList.push(newItem);
      }

      setOrderItems(orderList);
    } else {
      if (item.length > 0) {
        if (item[0]?.qty > 0) {
          let newQty = item[0].qty - 1;
          item[0].qty = newQty;
          item[0].total = newQty * price;
        }
      }

      setOrderItems(orderList);
    }
  }

  function getOrderQty(menuId) {
    let orderItem = orderItems.filter((a) => a.menuId == menuId);

    if (orderItem.length > 0) {
      return orderItem[0].qty;
    }

    return 0;
  }

  function getBasketItemCount() {
    let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0);

    return itemCount;
  }

  function sumOrder() {
    let total = orderItems.reduce((a, b) => a + (b.total || 0), 0);

    return total.toFixed(2);
  }

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{
              width: 30,
              height: 25,
            }}
          />
        </TouchableOpacity>

        {/* Shop Name Section */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              // paddingHorizontal: SIZES.padding * 6,
              borderRadius: SIZES.radius,
              // backgroundColor: COLORS.lightGray3,
            }}
          >
            <Text style={{ ...FONTS.h4 }}>{Shop?.name}</Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: SIZES.padding,
              borderRadius: SIZES.radius,
              // backgroundColor: COLORS.lightGray3,
            }}
          >
            <KeyboardAvoidingView>
              <SearchInput />
            </KeyboardAvoidingView>
          </View>
        </View>
        {/* <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.list}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity> */}
      </View>
    );
  }

  function renderFoodInfo() {
    return (
      <Animated.ScrollView
        vertical
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {Shop?.menu.map((item, index) => (
          <View key={`menu-${index}`} style={{ alignItems: "center" }}>
            <View style={{ height: 350 }}>
              {/* Food Image */}
              <View style={{ height: 350 }}>
                <TouchableOpacity
                // onPress={() => navigation.navigate("Product")}
                >
                  <Image
                    source={item.photo}
                    resizeMode="cover"
                    style={{
                      width: SIZES.width,
                      height: 330,
                    }}
                  />
                </TouchableOpacity>
              </View>

              {/* Quantity */}
              <View
                style={{
                  position: "absolute",
                  bottom: -20,
                  width: SIZES.width,
                  height: 50,
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 25,
                    borderBottomLeftRadius: 25,
                  }}
                  onPress={() => editOrder("-", item.menuId, item.price)}
                >
                  <Text style={{ ...FONTS.body1 }}>-</Text>
                </TouchableOpacity>

                <View
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ ...FONTS.h2 }}>
                    {getOrderQty(item.menuId)}
                  </Text>
                </View>

                <TouchableOpacity
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                  }}
                  onPress={() => editOrder("+", item.menuId, item.price)}
                >
                  <Text style={{ ...FONTS.body1 }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Name & Description */}
            <View
              style={{
                width: SIZES.width,
                alignItems: "center",
                marginTop: 15,
                paddingHorizontal: SIZES.padding * 2,
              }}
            >
              <Text
                style={{ marginVertical: 10, textAlign: "center", ...FONTS.h2 }}
              >
                {item.name} - {item.price.toFixed(2)}
              </Text>
              <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
            </View>

            {/* button*/}
            <View
              style={{
                marginTop: 20,
                marginBottom: 20,
                flexDirection: "row",
              }}
            >
              <Button title="S" color="darkorange" />

              <Button title="M" color="darkorange" />
              <Button title="L" color="darkorange" />
              <Button title="XL" color="darkorange" />
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  // function renderDots() {
  //   const dotPosition = Animated.divide(scrollX, SIZES.width);

  //   return (
  //     <View style={{ height: 30 }}>
  //       <View
  //         style={{
  //           flexDirection: "row",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           height: SIZES.padding,
  //         }}
  //       >
  //         {Shop?.menu.map((item, index) => {
  //           const opacity = dotPosition.interpolate({
  //             inputRange: [index - 1, index, index + 1],
  //             outputRange: [0.3, 1, 0.3],
  //             extrapolate: "clamp",
  //           });

  //           const dotSize = dotPosition.interpolate({
  //             inputRange: [index - 1, index, index + 1],
  //             outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
  //             extrapolate: "clamp",
  //           });

  //           const dotColor = dotPosition.interpolate({
  //             inputRange: [index - 1, index, index + 1],
  //             outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
  //             extrapolate: "clamp",
  //           });

  //           return (
  //             <Animated.View
  //               key={`dot-${index}`}
  //               opacity={opacity}
  //               style={{
  //                 borderRadius: SIZES.radius,
  //                 marginHorizontal: 6,
  //                 width: dotSize,
  //                 height: dotSize,
  //                 backgroundColor: dotColor,
  //               }}
  //             />
  //           );
  //         })}
  //       </View>
  //     </View>
  //   );
  // }

  function renderOrder() {
    return (
      <View>
        {/* {renderDots()} */}
        <View
          style={{
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: SIZES.padding * 2,
              paddingHorizontal: SIZES.padding * 3,
              borderBottomColor: COLORS.lightGray2,
              borderBottomWidth: 1,
            }}
          >
            <Text style={{ ...FONTS.h3 }}>
              {getBasketItemCount()} items in Cart
            </Text>
            <Text style={{ ...FONTS.h3 }}>₹{sumOrder()}</Text>
          </View>

          {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: SIZES.padding * 2,
              paddingHorizontal: SIZES.padding * 3,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.pin}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.darkgray,
                }}
              />
              <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>
                Location
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.master_card}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.darkgray,
                }}
              />
              <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>
                8888
              </Text>
            </View>
          </View> */}

          {/* Order Button */}
          <View
            style={{
              padding: SIZES.padding,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: SIZES.width * 0.9,
                // padding: SIZES.padding,
                backgroundColor: COLORS.primary,
                alignItems: "center",
                borderRadius: SIZES.radius,
              }}
              onPress={() => navigation.navigate("Address")}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                Order Now
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              padding: SIZES.padding,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: SIZES.width * 0.9,
                // padding: SIZES.padding,
                backgroundColor: COLORS.primary,
                alignItems: "center",
                borderRadius: SIZES.radius,
              }}
              onPress={() =>
                navigation.navigate("OrderDelivery", {
                  Shop: Shop,
                  currentLocation: currentLocation,
                })
              }
            >
              <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                Trail now
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {isIphoneX() && (
          <View
            style={{
              position: "absolute",
              bottom: -34,
              left: 0,
              right: 0,
              height: 34,
              backgroundColor: COLORS.white,
            }}
          ></View>
        )}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <CategoryList />

      {renderFoodInfo()}
      {renderOrder()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 30,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default Shop;
