import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorRestaurant } from "../features/restaurantSlice";
import { selectorBasketItems } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";

const BasketScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const restaurant = useSelector(selectorRestaurant);
  const basketItems = useSelector(selectorBasketItems);

  const [groupedItemsInBasket, setGroupedItemsInBasket] = React.useState([]);

  React.useMemo(() => {
    const groupedItems = basketItems.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [basketItems]);

  return (
    <SafeAreaView>
      <View>
        <View>
          <View>
            <Text className="text-center text-lg font-bold">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-3 right-5 p-2 bg-gray-100 rounded-full"
          >
            <AntDesign name="arrowleft" color={"#00CCBB"} size={50}></AntDesign>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
