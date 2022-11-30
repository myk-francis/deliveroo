import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectorBasketItems,
  selectorBasketTotal,
} from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const items = useSelector(selectorBasketItems);
  const basketTotal = useSelector(selectorBasketTotal);

  function currencyFormat(num) {
    return "TZS " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "1,");
  }

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Basket");
        }}
        className="flex-row items-center space-x-2 mx-5 bg-[#00CCBB] p-4 rounded-lg"
      >
        <Text className="text-white font-extrabold text-lg bg-green-500 py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white text-lg font-extrabold text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">{basketTotal}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
