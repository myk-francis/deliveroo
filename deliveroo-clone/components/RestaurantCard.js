import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pb-2">{title}</Text>

        <View className="flex-row items-center space-x-1">
          <AntDesign
            name="star"
            color={"#00800"}
            size={22}
            style={{ opacity: 0.5 }}
          ></AntDesign>
          <Text className="text-sm text-gray-500">
            <Text className="text-green-500">{rating}</Text> - {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <Ionicons
            name="location"
            color={"#00800"}
            size={22}
            style={{ opacity: 0.4 }}
          ></Ionicons>
          <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
