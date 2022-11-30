import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useSelector, useDispatch } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectorBasketItemWithId,
} from "../features/basketSlice";

const DishRow = ({ id, name, short_description, image, price }) => {
  const [isPressed, setIsPressed] = React.useState(false);

  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.items);
  const items = useSelector((state) => selectorBasketItemWithId(state, id));

  function currencyFormat(num) {
    return "TZS " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "1,");
  }

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, short_description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white p-4 border border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb1">{name}</Text>
            <Text className="text-gray-400">{short_description}</Text>
            <Text className="text-gray-400">{price}</Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              source={{
                uri: urlFor(image).url(),
              }}
              className="w-20 h-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              disabled={!items.length}
              onPress={() => removeItemFromBasket()}
            >
              <AntDesign
                name="minuscircle"
                size={40}
                color={items.length > 0 ? "#00CCBB" : "gray"}
              ></AntDesign>
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={() => addItemToBasket()}>
              <AntDesign
                name="pluscircle"
                size={40}
                color={"#00CCBB"}
              ></AntDesign>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
