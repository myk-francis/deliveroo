import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorRestaurant } from "../features/restaurantSlice";
import {
  selectorBasketItems,
  removeFromBasket,
  selectorBasketTotal,
} from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { ImagesToShow } from "../constants";
import { urlFor } from "../sanity";

const BasketScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const restaurant = useSelector(selectorRestaurant);
  const basketItems = useSelector(selectorBasketItems);
  const basketTotal = useSelector(selectorBasketTotal);

  const [groupedItemsInBasket, setGroupedItemsInBasket] = React.useState([]);

  function currencyFormat(num) {
    return "TZS " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "1,");
  }

  React.useMemo(() => {
    const groupedItems = basketItems.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [basketItems]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-sm">
          <View>
            <Text className="text-center text-lg font-bold">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute right-5 p-2 bg-gray-100 rounded-full"
          >
            <MaterialIcons
              name="cancel"
              color={"#00CCBB"}
              size={40}
            ></MaterialIcons>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: ImagesToShow[0].uri,
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 mins</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                className="h-12 w-12 rounded-full"
              />

              <Text className="flex-1">{items[0]?.name}</Text>

              <Text className="text-gray-600">{items[0]?.price}</Text>

              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">{basketTotal}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery</Text>
            <Text className="text-gray-400">{10000}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="">Order Total</Text>
            <Text className="font-extrabold">{basketTotal + 10000}</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PreparingOrder");
          }}
          className="rounded-lg bg-[#00CCBB] p-4 m-1"
        >
          <Text className="text-center text-lg font-bold text-white">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
