import { View, Text, ScrollView } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import RestaurantCard from "./RestaurantCard";
import { ImagesToShow } from "../constants";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="flex-row items-center justify-between mt-4 px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign name="arrowright" color={"#00CCBB"} size={20}></AntDesign>
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 0 }}
        className="px-4"
      >
        {/* Restaurants Cards */}
        <RestaurantCard
          id={"1"}
          imgUrl={ImagesToShow[6].uri}
          title={"Mike Foods!"}
          rating={4.8}
          genre={"Bongo Foods"}
          address={"Moshi Beach"}
          short_description={"This is a test description"}
          dishes={[]}
          long={20}
          lat={19}
        />
        <RestaurantCard
          id={"1"}
          imgUrl={ImagesToShow[6].uri}
          title={"Mike Foods!"}
          rating={4.8}
          genre={"Bongo Foods"}
          address={"Moshi Beach"}
          short_description={"This is a test description"}
          dishes={[]}
          long={20}
          lat={19}
        />
        <RestaurantCard
          id={"1"}
          imgUrl={ImagesToShow[6].uri}
          title={"Mike Foods!"}
          rating={4.8}
          genre={"Bongo Foods"}
          address={"Moshi Beach"}
          short_description={"This is a test description"}
          dishes={[]}
          long={20}
          lat={19}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
